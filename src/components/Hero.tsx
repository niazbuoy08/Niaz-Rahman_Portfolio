import Image from "next/image";
import { heroStats, intro, profile } from "@/lib/data";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ChartIcon,
  ChatIcon,
  CubeIcon,
  DocumentIcon,
  MapPinIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from "@/components/icons";

const STAT_ICONS = [
  { icon: CubeIcon, tint: "bg-blue-50 text-accent" },
  { icon: DocumentIcon, tint: "bg-sky-50 text-sky-600" },
  { icon: ShieldCheckIcon, tint: "bg-emerald-50 text-emerald-600" },
  { icon: TrophyIcon, tint: "bg-violet-50 text-violet-600" },
];

function FloatingCard({
  icon: Icon,
  tint,
  title,
  body,
  className,
}: {
  icon: (props: { className?: string }) => React.ReactElement;
  tint: string;
  title: string;
  body: string;
  className: string;
}) {
  return (
    <div
      className={`absolute z-20 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_18px_45px_-18px_rgba(15,23,42,0.28)] backdrop-blur-sm sm:p-4 ${className}`}
    >
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg sm:h-9 sm:w-9 ${tint}`}>
        <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
      </span>
      <p className="mt-2.5 text-[12.5px] font-bold leading-tight text-foreground sm:text-[14px]">{title}</p>
      <p className="mt-1 text-[11.5px] leading-snug text-subtle sm:text-[12.5px]">{body}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-end gap-6 px-6 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:px-8 lg:pt-6">
        <div className="animate-rise pb-4 lg:self-center lg:pb-16">
          <p className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-muted">
            <span className="h-[2px] w-7 rounded-full bg-orange-500" />
            Software Engineering · Product · Business
          </p>

          <h1 className="mt-6 text-[2.7rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-[3.5rem] lg:text-[3.9rem]">
            I build products that solve <span className="text-accent">real problems.</span>
          </h1>

          <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.7] text-muted sm:text-[18px]">{intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-accent px-7 py-3.5 text-[15.5px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View my work
              <ArrowRightIcon className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-lg border-[1.5px] border-foreground/70 bg-surface px-7 py-3.5 text-[15.5px] font-semibold text-foreground transition-colors hover:bg-foreground hover:text-white"
            >
              <ChatIcon className="h-4.5 w-4.5" />
              Let&apos;s talk
            </a>
          </div>

          <p className="mt-7 flex items-center gap-2.5 text-[14px] text-muted">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            {profile.currentRole} at {profile.currentCompany}
          </p>
        </div>

        <div className="animate-rise relative mx-auto h-[430px] w-full max-w-[360px] [animation-delay:120ms] sm:h-[540px] sm:max-w-[520px] lg:h-[600px] lg:max-w-none">
          <div className="absolute top-[2%] left-1/2 aspect-square w-[115%] -translate-x-[42%] rounded-full bg-gradient-to-b from-blue-100/80 to-blue-50/0" />
          <div className="absolute bottom-0 left-1/2 h-[84%] w-[62%] -translate-x-[54%] rounded-t-full bg-gradient-to-b from-blue-200/80 via-blue-100 to-blue-50" />

          <svg
            viewBox="0 0 160 120"
            className="absolute bottom-[14%] left-[-8%] z-10 w-[22%] text-accent/60"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 112C40 92 86 70 110 46c16-16 24-36 12-40-14-5-30 18-26 40 3 18 22 26 52 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <svg viewBox="0 0 40 40" className="absolute top-[2%] right-[14%] z-10 w-10 text-orange-500" aria-hidden="true">
            <path d="M8 18 20 4M18 26 34 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>

          <div
            aria-hidden="true"
            className="absolute top-[36%] right-0 z-0 hidden h-24 w-20 xl:right-[-6%] bg-[radial-gradient(circle,rgba(100,116,139,0.35)_1.4px,transparent_1.6px)] [background-size:14px_14px] sm:block"
          />

          <Image
            src="/niaz-cutout.webp"
            alt="Portrait of Niaz Rahman"
            width={856}
            height={1116}
            priority
            sizes="(min-width: 1024px) 460px, (min-width: 640px) 410px, 330px"
            className="absolute bottom-0 left-1/2 z-10 h-[90%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_30px_rgba(15,23,42,0.12)]"
          />

          <FloatingCard
            icon={BriefcaseIcon}
            tint="bg-blue-50 text-accent"
            title="Business Analyst"
            body="Bridging business and technology"
            className="top-[52%] left-0 w-[124px] sm:top-[26%] sm:left-[-2%] sm:w-[168px] lg:left-0 xl:left-[-4%]"
          />
          <FloatingCard
            icon={ChartIcon}
            tint="bg-emerald-50 text-emerald-600"
            title="Product & Technology"
            body="Building digital products with AI"
            className="top-[10%] right-0 hidden w-[176px] sm:block sm:right-[-4%] lg:right-0 xl:right-[-12%]"
          />
          <FloatingCard
            icon={MapPinIcon}
            tint="bg-orange-50 text-orange-500"
            title="Based in Bangladesh"
            body="Open to global opportunities"
            className="top-[64%] right-0 w-[124px] sm:top-[52%] sm:right-[-2%] sm:w-[164px] lg:right-0 xl:right-[-8%]"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-6 pb-16 lg:px-8 lg:pb-20">
        <dl className="grid grid-cols-1 gap-y-6 rounded-2xl border border-border bg-surface px-6 py-7 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.25)] sm:grid-cols-2 sm:gap-x-6 xl:grid-cols-4 xl:gap-0 xl:px-4">
          {heroStats.map((stat, i) => {
            const { icon: Icon, tint } = STAT_ICONS[i];
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 xl:px-6 ${i > 0 ? "xl:border-l xl:border-border" : ""}`}
              >
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${tint}`}>
                  <Icon className="h-6.5 w-6.5" />
                </span>
                <div className="flex flex-col">
                  <dt className="order-2 mt-0.5 text-[14px] leading-snug text-muted">{stat.label}</dt>
                  <dd className="order-1 text-[22px] font-extrabold leading-none tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
