"use client";

import { useEffect, useRef, useState } from "react";
import type { PDFDocumentProxy } from "pdfjs-dist";

type Status = "loading" | "ready" | "error";

// Renders the PDF with PDF.js instead of the browser's PDF plugin, which many browsers
// (most phones, and desktops set to "download PDFs") won't show inline.
export default function ResumeViewer({ src }: { src: string }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<Promise<PDFDocumentProxy> | null>(null);
  const [width, setWidth] = useState(0);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const observer = new ResizeObserver(([entry]) => {
      const next = Math.floor(entry.contentRect.width);
      setWidth((prev) => (Math.abs(prev - next) > 1 ? next : prev));
    });
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || width === 0) return;
    let cancelled = false;

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        docRef.current ??= pdfjs.getDocument({ url: src }).promise;
        const doc = await docRef.current;
        const dpr = window.devicePixelRatio || 1;
        const wrappers: HTMLElement[] = [];

        for (let n = 1; n <= doc.numPages; n++) {
          const page = await doc.getPage(n);
          const viewport = page.getViewport({ scale: width / page.getViewport({ scale: 1 }).width });

          const wrapper = document.createElement("div");
          wrapper.className =
            "relative overflow-hidden rounded-md bg-white shadow-[0_12px_32px_-14px_rgba(15,23,42,0.4)]" +
            (n > 1 ? " mt-4 sm:mt-6" : "");
          wrapper.style.width = `${viewport.width}px`;
          wrapper.style.height = `${viewport.height}px`;

          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width * dpr);
          canvas.height = Math.floor(viewport.height * dpr);
          canvas.style.width = "100%";
          canvas.style.height = "100%";
          canvas.setAttribute("aria-label", `Resume page ${n} of ${doc.numPages}`);
          canvas.setAttribute("role", "img");
          wrapper.appendChild(canvas);

          await page.render({ canvas, viewport, transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined }).promise;

          for (const annotation of await page.getAnnotations()) {
            if (annotation.subtype !== "Link" || !annotation.url) continue;
            const [x1, y1] = viewport.convertToViewportPoint(annotation.rect[0], annotation.rect[1]);
            const [x2, y2] = viewport.convertToViewportPoint(annotation.rect[2], annotation.rect[3]);
            const link = document.createElement("a");
            link.href = annotation.url;
            link.target = "_blank";
            link.rel = "noreferrer";
            link.setAttribute("aria-label", annotation.url);
            link.className = "absolute rounded-sm hover:bg-blue-500/10";
            Object.assign(link.style, {
              left: `${Math.min(x1, x2)}px`,
              top: `${Math.min(y1, y2)}px`,
              width: `${Math.abs(x2 - x1)}px`,
              height: `${Math.abs(y2 - y1)}px`,
            });
            wrapper.appendChild(link);
          }

          wrappers.push(wrapper);
        }

        if (cancelled) return;
        host.replaceChildren(...wrappers);
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [src, width]);

  return (
    <div className="rounded-2xl border border-border bg-slate-100 p-3 sm:p-6">
      {status === "loading" && (
        <div className="aspect-[1/1.414] w-full animate-pulse rounded-md bg-white/70" aria-label="Loading resume" />
      )}
      {status === "error" && (
        <div className="rounded-md bg-white p-8 text-center">
          <p className="text-[15px] font-semibold text-foreground">The resume preview couldn&apos;t load.</p>
          <a href={src} target="_blank" rel="noreferrer" className="mt-3 inline-block text-[14.5px] font-semibold text-accent">
            Open the PDF instead →
          </a>
        </div>
      )}
      <div ref={hostRef} className={status === "ready" ? "" : "h-0 overflow-hidden"} />
    </div>
  );
}
