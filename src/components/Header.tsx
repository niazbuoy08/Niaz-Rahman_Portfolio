"use client";

import { useEffect, useState } from "react";
import { CloseIcon, DocumentIcon, MenuIcon } from "@/components/icons";

const NAV_ITEMS = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [activeId, setActiveId] = useState("top");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "border-border bg-surface/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="text-[22px] font-extrabold tracking-[-0.02em] text-foreground">
          Niaz <span className="text-accent">Rahman</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1.5 text-[14.5px] font-medium transition-colors ${
                  active ? "text-accent" : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-accent transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="/resume"
          className="hidden items-center gap-2 rounded-lg border-[1.5px] border-accent px-5 py-2.5 text-[14.5px] font-semibold text-accent transition-colors hover:bg-accent hover:text-white md:inline-flex"
        >
          <DocumentIcon className="h-4.5 w-4.5" />
          Resume
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground md:hidden"
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-surface px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-foreground hover:bg-background"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="/resume"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg border-[1.5px] border-accent px-4 py-3 text-[15px] font-semibold text-accent"
          >
            <DocumentIcon className="h-4.5 w-4.5" />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
