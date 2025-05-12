import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

export async function GET() {
  let browser = null;

  try {
    // Try to find Chrome executable
    const chromePaths = [
      process.env.CHROME_EXECUTABLE_PATH,
      process.platform === "darwin"
        ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        : process.platform === "win32"
        ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
        : "/usr/bin/google-chrome",
      process.platform === "darwin"
        ? "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
        : process.platform === "win32"
        ? "C:\\Program Files\\Google\\Chrome SxS\\Application\\chrome.exe"
        : "/usr/bin/google-chromium",
    ];

    let executablePath: string | undefined;
    for (const path of chromePaths) {
      if (path && fs.existsSync(path)) {
        executablePath = path;
        break;
      }
    }

    if (!executablePath) {
      console.warn("Chrome executable not found, using default path");
    }

    // Launch a new browser instance
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
      executablePath,
    });

    // Create a new page
    const page = await browser.newPage();

    // Set viewport to A4 size
    await page.setViewport({
      width: 1240,
      height: 1754, // A4 size at 96 DPI
      deviceScaleFactor: 2,
    });

    // Enable text layer preservation
    await page.evaluateOnNewDocument(() => {
      // Ensure text is selectable and preserved
      document.body.style.webkitTextSizeAdjust = "100%";
      document.body.style.textRendering = "optimizeLegibility";
      // Disable any text transformations that might affect ATS parsing
      document.body.style.textTransform = "none";
    });

    // Get the base URL based on environment
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    console.log(`Navigating to: ${baseUrl}`);

    // Navigate to the main page
    await page.goto(baseUrl, {
      waitUntil: "networkidle0",
      timeout: 30000, // Increase timeout to 30 seconds
    });

    // Wait for content to be fully rendered
    await page.waitForSelector("main", { timeout: 10000 });

    // Hide the action buttons before generating PDF
    await page.evaluate(() => {
      const actionButtons = document.querySelector(".fixed.top-4.right-4");
      if (actionButtons) {
        (actionButtons as HTMLElement).style.display = "none";
      }
    });

    // Generate PDF with smaller margins and better quality
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0.4in",
        right: "0.4in",
        bottom: "0.4in",
        left: "0.4in",
      },
      preferCSSPageSize: true,
      tagged: true,
      outline: true,
      displayHeaderFooter: false,
      omitBackground: false,
      scale: 1.0,
      timeout: 30000,
    });

    // Close browser
    if (browser) {
      await browser.close();
    }

    // Return the PDF with appropriate headers
    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=Lebenslauf.pdf",
        "X-PDF-Standard": "PDF/A-1b",
        "X-PDF-Version": "1.7",
        "X-PDF-Text-Layer": "enabled",
        "X-PDF-Accessibility": "enabled",
      },
    });
  } catch (error: any) {
    console.error("Error generating PDF:", error);

    // Make sure to close the browser if it was opened
    if (browser) {
      try {
        await browser.close();
      } catch (closeError) {
        console.error("Error closing browser:", closeError);
      }
    }

    return Response.json(
      {
        error: "Failed to generate PDF",
        details: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
