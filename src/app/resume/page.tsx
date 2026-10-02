import type { Metadata } from "next";
import { profile } from "@/lib/data";
import { ArrowRightIcon, DocumentIcon, ExternalLinkIcon } from "@/components/icons";

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
              className="hidden items-center gap-2 rounded-lg border-[1.5px] border-border bg-surface md:inline-flex px-5 py-3 text-[14.5px] font-semibold text-foreground transition-colors hover:border-foreground/40"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Open in new tab
            </a>
          </div>
        </div>

        <iframe
          src={`${PDF_PATH}#view=FitH&navpanes=0`}
          title="Niaz Rahman — resume (PDF)"
          className="mt-8 hidden h-[85vh] min-h-[640px] w-full rounded-2xl border border-border bg-surface shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)] md:block"
        />

        {/* Most mobile browsers can't render a PDF inside a page, so phones get a hand-off to the native viewer. */}
        <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-center md:hidden">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
            <DocumentIcon className="h-7 w-7" />
          </span>
          <p className="mt-4 text-[16px] font-bold text-foreground">Resume (PDF)</p>
          <p className="mt-1 text-[14px] text-muted">Opens in your phone&apos;s PDF viewer.</p>
          <a
            href={PDF_PATH}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 text-[15px] font-semibold text-white"
          >
            View PDF
          </a>
        </div>
      </div>
    </main>
  );
}
