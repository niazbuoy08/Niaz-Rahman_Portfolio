"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full border border-border px-4 py-2 text-[13.5px] font-medium text-foreground hover:border-foreground/30"
    >
      Print / Save as PDF
    </button>
  );
}
