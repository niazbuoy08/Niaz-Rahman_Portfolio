import type { Metadata } from "next";
import {
  awards,
  education,
  experience,
  leadership,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";
import PrintButton from "@/components/PrintButton";
import Rich from "@/components/Rich";

export const metadata: Metadata = {
  title: "Resume — Niaz Rahman",
  description: "Full resume for Niaz Rahman — Business Analyst at Sheba Technologies and Software Engineering graduate.",
};

export default function ResumePage() {
  return (
    <div className="min-h-full bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
        <div className="flex items-center justify-between print:hidden">
          {/* Full page load on purpose: Next 16 static export 404s on client-side segment fetches. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-muted hover:text-foreground">
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Back to portfolio
          </a>
          <PrintButton />
        </div>

        <article className="mt-10 rounded-2xl border border-border bg-surface p-8 print:border-0 print:p-0 sm:p-12">
          <header className="border-b border-border pb-6">
            <h1 className="text-[1.9rem] font-semibold tracking-tight text-foreground">{profile.name}</h1>
            <p className="mt-1 text-[14px] text-muted">{profile.tagline}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-subtle">
              <span>{profile.location}</span>
              <span>{profile.phone}</span>
              <span>{profile.email}</span>
              <span>{profile.githubLabel}</span>
              <span>{profile.linkedinLabel}</span>
            </p>
          </header>

          <Section title="Professional Summary">
            <p className="text-[14px] leading-relaxed text-muted">{profile.summary}</p>
          </Section>

          <Section title="Technical Skills">
            <dl className="space-y-2.5">
              {skillGroups.map((group) => (
                <div key={group.label} className="grid grid-cols-[9rem_1fr] gap-4 text-[13.5px]">
                  <dt className="font-semibold text-foreground">{group.label}</dt>
                  <dd className="text-muted">{group.skills.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Engineering Projects">
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[14.5px] font-semibold text-foreground">
                      {project.name}, {project.tagline}
                    </h3>
                    <span className="text-[12.5px] text-subtle">{project.period}</span>
                  </div>
                  <p className="text-[12.5px] text-subtle">{project.tech.join(" · ")}</p>
                  <ul className="mt-2 space-y-1.5">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                        <span><Rich text={bullet} /></span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Professional Experience">
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[14.5px] font-semibold text-foreground">{job.company}</h3>
                    <span className="text-[12.5px] text-subtle">{job.period}</span>
                  </div>
                  <p className="text-[12.5px] italic text-subtle">
                    {job.role} · {job.location}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                        <span><Rich text={bullet} /></span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Education">
            <div className="space-y-3">
              {education.map((item) => (
                <div key={item.school + item.period}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[14px] font-semibold text-foreground">{item.school}</h3>
                    <span className="text-[12.5px] text-subtle">{item.period}</span>
                  </div>
                  <p className="text-[13px] italic text-subtle">
                    {item.credential} · {item.location}
                  </p>
                  {item.detail && <p className="mt-1 text-[12.5px] leading-relaxed text-subtle">{item.detail}</p>}
                </div>
              ))}
            </div>
          </Section>

          <Section title="Leadership & Extracurricular">
            <div className="space-y-5">
              {leadership.map((item) => (
                <div key={item.org}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[14px] font-semibold text-foreground">{item.org}</h3>
                    <span className="text-[12.5px] text-subtle">{item.period}</span>
                  </div>
                  <p className="text-[13px] italic text-subtle">{item.role}</p>
                  <ul className="mt-2 space-y-1.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Honours & Awards" last>
            <ul className="space-y-1.5">
              {awards.map((award) => (
                <li key={award.title} className="flex justify-between gap-4 text-[13px] text-muted">
                  <span>
                    {award.title}
                    {award.org ? `, ${award.org}` : ""}
                  </span>
                  <span className="shrink-0 text-subtle">{award.scale}</span>
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
  last = false,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={`py-6 ${last ? "" : "border-b border-border"}`}>
      <h2 className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">{title}</h2>
      {children}
    </section>
  );
}
