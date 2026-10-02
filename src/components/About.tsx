import { education, skillGroups } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  const [degree, ...school] = education;

  return (
    <section id="about" className="border-t border-border bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Skills & education"
          title="The toolkit behind the work"
          description="Built across backend engineering, applied machine learning and business analysis."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <dl className="divide-y divide-border border-y border-border">
            {skillGroups.map((group) => (
              <div key={group.label} className="grid gap-3 py-5 sm:grid-cols-[150px_1fr] sm:gap-6">
                <dt className="pt-1 text-[13.5px] font-semibold text-foreground">{group.label}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-[13px] text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          <div>
            <h3 className="font-mono text-[12px] uppercase tracking-wider text-subtle">Education</h3>

            <article className="mt-4 rounded-2xl border border-border bg-foreground p-6 text-white sm:p-7">
              <p className="font-mono text-[12px] text-blue-300">{degree.period}</p>
              <h4 className="mt-3 text-[17px] font-semibold leading-snug">{degree.school}</h4>
              <p className="mt-1 text-[14px] text-slate-300">{degree.degree}</p>
              <div className="mt-5 flex items-baseline gap-2 border-t border-white/10 pt-5">
                <span className="text-[2rem] font-semibold leading-none tracking-tight">{degree.cgpa}</span>
                <span className="text-[13.5px] text-slate-400">/ 4.00 CGPA</span>
              </div>
              {degree.detail && (
                <p className="mt-5 text-[13px] leading-relaxed text-slate-400">{degree.detail}</p>
              )}
            </article>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {school.map((item) => {
                const [level, grades] = item.credential.split(" — ");
                return (
                  <article key={item.credential} className="rounded-2xl border border-border bg-background/60 p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="text-[14.5px] font-semibold text-foreground">{level}</p>
                      <p className="font-mono text-[12px] text-subtle">{item.period}</p>
                    </div>
                    <p className="mt-1.5 text-[1.15rem] font-semibold tracking-tight text-accent">{grades}</p>
                    <p className="mt-1.5 text-[13px] text-muted">{item.school}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
