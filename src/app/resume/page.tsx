import type { Metadata } from "next";
import { profile } from "@/lib/data";
import { ArrowRightIcon, DocumentIcon, ExternalLinkIcon } from "@/components/icons";
import ResumeViewer from "@/components/ResumeViewer";

const PDF_PATH = "/Niaz-Rahman-Resume-2026.pdf";

export const metadata: Metadata = {
  title: "Resume — Niaz Rahman",
  description: "Resume of Niaz Rahman — Business Analyst at Sheba Technologies and Software Engineering graduate.",
};

export default function ResumePage() {
  return (
    <main className="min-h-full bg-background">
      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8 lg:py-10">
        {/* Full page load on purpose: Next 16 static export 404s on client-side segment fetches. */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted transition-colors hover:text-foreground"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
          Back to portfolio
        </a>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-accent">
              <span className="h-px w-8 bg-accent/40" />
              Resume
            </p>
            <h1 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-[-0.025em] text-foreground sm:text-[2.4rem]">
              {profile.name}
            </h1>
            <p className="mt-1.5 text-[15px] text-muted">{profile.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={PDF_PATH}
              download="Niaz-Rahman-Resume-2026.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[14.5px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(37,99,235,0.7)] transition-colors hover:bg-blue-700"
            >
              <DocumentIcon className="h-4.5 w-4.5" />
              Download PDF
            </a>
            <a
              href={PDF_PATH}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-border bg-surface px-5 py-3 text-[14.5px] font-semibold text-foreground transition-colors hover:border-foreground/40"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Open in new tab
            </a>
          </div>
        </div>

        <div className="mt-8">
          <ResumeViewer src={PDF_PATH} />
        </div>
      </div>
    </main>
  );
}
