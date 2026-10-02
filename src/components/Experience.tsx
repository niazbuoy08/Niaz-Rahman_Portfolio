import { awards, experience, leadership } from "@/lib/data";
import Rich from "@/components/Rich";
import SectionHeading from "@/components/SectionHeading";

function rankOf(title: string) {
  const [rank, ...rest] = title.split(", ");
  return { rank, event: rest.join(", ") };
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've worked"
          description="Professional work in FinTech and banking, plus the leadership roles and competition results behind it."
        />

        <div className="mt-14 space-y-6">
          {experience.map((job) => (
            <article
              key={job.company}
              className="grid gap-8 rounded-3xl border border-border bg-background/60 p-6 sm:p-10 lg:grid-cols-[260px_1fr] lg:gap-12"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-[18px] font-semibold text-white">
                  S
                </div>
                <p className="mt-5 text-[15px] font-semibold text-foreground">{job.company}</p>
                <p className="mt-1 text-[13.5px] text-subtle">{job.location}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[12.5px] font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {job.period}
                </p>
              </div>

              <div>
                <h3 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-foreground">{job.role}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{job.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.keyWork.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-accent-soft px-3 py-1 text-[12.5px] font-medium text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-7 space-y-4 border-t border-border pt-7">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3.5 text-[15px] leading-relaxed text-muted">
                      <svg viewBox="0 0 16 16" className="mt-[5px] h-4 w-4 shrink-0 text-accent" aria-hidden="true">
                        <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>
                        <Rich text={bullet} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-[1.25rem] font-semibold tracking-[-0.015em] text-foreground">
            Leadership &amp; extracurricular
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {leadership.map((item) => (
              <article key={item.org} className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <p className="font-mono text-[12px] uppercase tracking-wider text-subtle">{item.period}</p>
                <h4 className="mt-3 text-[16px] font-semibold text-foreground">{item.role}</h4>
                <p className="mt-0.5 text-[14px] font-medium text-accent">{item.org}</p>
                <ul className="mt-4 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[14px] leading-relaxed text-muted">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-subtle" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="text-[1.25rem] font-semibold tracking-[-0.015em] text-foreground">Honours &amp; awards</h3>
            <p className="text-[13.5px] text-subtle">Business case &amp; technology competitions</p>
          </div>
          <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => {
              const { rank, event } = rankOf(award.title);
              return (
                <li key={award.title} className="flex flex-col bg-surface p-6">
                  <p className="text-[13px] font-semibold text-accent">{rank}</p>
                  <p className="mt-2 text-[15px] font-semibold leading-snug text-foreground">{event}</p>
                  {award.org && <p className="mt-1 text-[13.5px] text-muted">{award.org}</p>}
                  <p className="mt-auto pt-4 font-mono text-[12px] text-subtle">{award.scale}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
