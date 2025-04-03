import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import ResumePDF from "@/components/ResumePDF";

export async function GET() {
  try {
    // Generate PDF
    const pdfBuffer = await renderToBuffer(ResumePDF());

    // Return PDF with appropriate headers
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=resume.pdf",
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}

