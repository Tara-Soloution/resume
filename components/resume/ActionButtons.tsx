import { PrintButton } from "@/components/print-button";

export function ActionButtons() {
  return (
    <div className="mt-8 mb-6 flex justify-center gap-4 print:hidden">
      <a
        href="/resume.pdf"
        download="resume.pdf"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-1.5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex items-center"
      >
        <svg
          className="w-4 h-4 mr-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download PDF
      </a>
      {/* <PrintButton /> */}
    </div>
  );
}
