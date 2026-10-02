import { profile, projects } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";
import ProjectVisual from "@/components/ProjectVisual";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="bg-background pb-24 lg:pb-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="01"
            eyebrow="Projects"
            title="Selected work"
            description="A few projects that showcase my experience in product development, AI and real-world problem solving."
          />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-accent"
          >
            View all projects
            <ArrowRightIcon className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(15,23,42,0.35)]"
            >
              <ProjectVisual slug={project.slug} compact />

              <div className="flex flex-1 flex-col px-4 pt-5 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[1.3rem] font-bold leading-tight tracking-[-0.02em] text-foreground">
                      {project.name}
                    </h3>
                    <p className="mt-1.5 font-mono text-[12px] text-subtle">{project.period}</p>
                  </div>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                  >
                    <ArrowRightIcon className="h-4.5 w-4.5" />
                  </a>
                </div>

                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{project.summary}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-blue-100 bg-accent-soft px-2.5 py-1 text-[12.5px] font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
