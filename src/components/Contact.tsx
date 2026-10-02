import { profile } from "@/lib/data";
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";

const CHANNELS = [
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: PhoneIcon },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: profile.githubLabel, href: profile.github, icon: GithubIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-24 lg:py-32">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_70%_at_20%_30%,black,transparent)]" />
      <div className="pointer-events-none absolute top-1/4 right-[-12%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <SectionHeading
              index="04"
              eyebrow="Contact"
              title="Let's build something useful together."
              description="Open to conversations about backend engineering, product and FinTech work. Email is the fastest way to reach me."
              inverted
            />
            <a
              href={`mailto:${profile.email}`}
              className="group mt-10 inline-flex max-w-full items-center gap-3 rounded-full bg-white py-2 pr-6 pl-2 text-[15px] font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                <MailIcon className="h-4.5 w-4.5" />
              </span>
              <span className="min-w-0 truncate">{profile.email}</span>
              <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <ul className="min-w-0 divide-y divide-white/10 border-y border-white/10">
            {CHANNELS.map((channel) => {
              const external = channel.href.startsWith("http");
              return (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 py-5 pr-1"
                  >
                    <channel.icon className="h-5 w-5 shrink-0 text-slate-400 transition-colors group-hover:text-white" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11.5px] uppercase tracking-wider text-slate-500">
                        {channel.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[15px] text-slate-200 transition-colors group-hover:text-white">
                        {channel.value}
                      </span>
                    </span>
                    <ArrowRightIcon className="h-4 w-4 shrink-0 -rotate-45 text-slate-500 transition-all group-hover:text-white" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
