import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <p className="text-[13.5px] text-slate-400">
          © {new Date().getFullYear()} {profile.name} · Dhaka, Bangladesh
        </p>
        <div className="flex items-center gap-6 text-[13.5px] text-slate-400">
          <a href="/resume" className="transition-colors hover:text-white">
            Resume
          </a>
          <a href="#top" className="transition-colors hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
