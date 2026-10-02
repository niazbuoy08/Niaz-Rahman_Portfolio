import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const EXTENSIONS = ["svg", "png", "webp", "jpg", "jpeg"];

// Resolved at build time: drop public/logos/<name>.<ext> in and the next build shows it.
function findLogo(name: string) {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(process.cwd(), "public", "logos", `${name}.${ext}`))) return `/logos/${name}.${ext}`;
  }
  return null;
}

export default function OrgLogo({ name, initials, label }: { name: string; initials: string; label: string }) {
  const src = findLogo(name);
  return (
    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white">
      {src ? (
        <Image src={src} alt={`${label} logo`} fill sizes="48px" className="object-contain p-1.5" />
      ) : (
        <span aria-hidden="true" className="text-[12px] font-extrabold tracking-tight text-accent">
          {initials}
        </span>
      )}
    </span>
  );
}
