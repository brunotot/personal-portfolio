import { ReactNode } from "react";
import { education, experience } from "../../data/experience";
import { personal } from "../../data/personal";
import { projects } from "../../data/projects";
import { skillGroups } from "../../data/skills";

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-5 break-inside-avoid">
      <h2 className="mb-2 border-b border-slate-300 pb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </h2>
      {children}
    </section>
  );
}

/**
 * Print-only résumé. Hidden on screen, rendered on `window.print()` / Ctrl+P.
 * Sourced entirely from the shared data files so it never drifts from the site.
 */
export default function ResumeDocument() {
  const { name, title, location, email, phone, linkedin, github, summary } =
    personal;

  return (
    <div className="hidden bg-white text-slate-800 print:block">
      <div className="mx-auto max-w-[800px] px-10 py-8 text-[12.5px] leading-relaxed print:max-w-none print:px-0 print:py-0">
        {/* Header */}
        <header className="border-b-2 border-slate-800 pb-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {name}
          </h1>
          <p className="mt-0.5 text-base font-medium text-slate-600">{title}</p>
          <p className="mt-2 flex flex-wrap gap-x-2 gap-y-0.5 text-[11.5px] text-slate-600">
            <span>{location}</span>
            <span aria-hidden>·</span>
            <a href={`mailto:${email}`} className="text-slate-700">
              {email}
            </a>
            <span aria-hidden>·</span>
            <span>{phone}</span>
            <span aria-hidden>·</span>
            <a href={linkedin.url} className="text-slate-700">
              {linkedin.label}
            </a>
            <span aria-hidden>·</span>
            <a href={github.url} className="text-slate-700">
              {github.label}
            </a>
          </p>
        </header>

        {/* Profile */}
        <ResumeSection title="Profile">
          <p className="text-slate-700">{summary}</p>
        </ResumeSection>

        {/* Experience */}
        <ResumeSection title="Experience">
          <div className="space-y-3">
            {experience.map((item) => (
              <div key={item.id} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                    <span className="font-normal text-slate-600">
                      {" "}
                      — {item.company}
                    </span>
                  </h3>
                  {item.period && (
                    <span className="whitespace-nowrap text-[11px] text-slate-500">
                      {item.period}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-slate-700">{item.summary}</p>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-slate-700 marker:text-slate-400">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Selected projects */}
        <ResumeSection title="Selected Projects">
          <div className="space-y-2.5">
            {projects.map((project) => (
              <div key={project.id} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-semibold text-slate-900">
                    {project.name}
                    <span className="font-normal text-slate-600">
                      {" "}
                      — {project.role}
                    </span>
                  </h3>
                  {project.period && (
                    <span className="whitespace-nowrap text-[11px] text-slate-500">
                      {project.period}
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-slate-700">{project.summary}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  {project.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Skills */}
        <ResumeSection title="Skills">
          <div className="space-y-1">
            {skillGroups.map((group) => (
              <p key={group.name} className="text-slate-700">
                <span className="font-semibold text-slate-900">
                  {group.name}:
                </span>{" "}
                {group.skills.join(", ")}
              </p>
            ))}
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          <div className="space-y-1.5">
            {education.map((item) => (
              <div
                key={item.id}
                className="flex items-baseline justify-between gap-4 break-inside-avoid"
              >
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                  <span className="font-normal text-slate-600">
                    {" "}
                    — {item.school}
                  </span>
                </h3>
                {item.period && (
                  <span className="whitespace-nowrap text-[11px] text-slate-500">
                    {item.period}
                  </span>
                )}
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Languages */}
        <ResumeSection title="Languages">
          <p className="text-slate-700">{personal.languages.join("   ·   ")}</p>
        </ResumeSection>
      </div>
    </div>
  );
}
