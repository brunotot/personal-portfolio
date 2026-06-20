import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { educationIds, experienceIds } from "../../data/experience";
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
 * Structure comes from the shared data files; all text comes from i18n so the
 * résumé follows the selected language.
 */
export default function ResumeDocument() {
  const { t } = useTranslation();
  const { name, email, phone, linkedin, github } = personal;
  const personalLanguages = t("resume.personal.languages", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="hidden bg-white text-slate-800 print:block">
      <div className="mx-auto max-w-[800px] px-10 py-8 text-[12.5px] leading-relaxed print:max-w-none print:px-0 print:py-0">
        {/* Header */}
        <header className="border-b-2 border-slate-800 pb-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {name}
          </h1>
          <p className="mt-0.5 text-base font-medium text-slate-600">
            {t("resume.personal.title")}
          </p>
          <p className="mt-2 flex flex-wrap gap-x-2 gap-y-0.5 text-[11.5px] text-slate-600">
            <span>{t("resume.personal.location")}</span>
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
        <ResumeSection title={t("resume.profile")}>
          <p className="text-slate-700">{t("resume.personal.summary")}</p>
        </ResumeSection>

        {/* Experience */}
        <ResumeSection title={t("resume.experience")}>
          <div className="space-y-3">
            {experienceIds.map((id) => {
              const period = t(`experience.items.${id}.period`);
              const highlights = t(`experience.items.${id}.highlights`, {
                returnObjects: true,
              }) as string[];
              return (
                <div key={id} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold text-slate-900">
                      {t(`experience.items.${id}.title`)}
                      <span className="font-normal text-slate-600">
                        {" "}
                        — {t(`experience.items.${id}.company`)}
                      </span>
                    </h3>
                    {period && (
                      <span className="whitespace-nowrap text-[11px] text-slate-500">
                        {period}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-slate-700">
                    {t(`experience.items.${id}.summary`)}
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-slate-700 marker:text-slate-400">
                    {highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </ResumeSection>

        {/* Selected projects */}
        <ResumeSection title={t("resume.selectedProjects")}>
          <div className="space-y-2.5">
            {projects.map((project) => {
              const base = `projects.items.${project.id}`;
              const period = t(`${base}.period`);
              return (
                <div key={project.id} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-semibold text-slate-900">
                      {project.name}
                      <span className="font-normal text-slate-600">
                        {" "}
                        — {t(`${base}.role`)}
                      </span>
                    </h3>
                    {period && (
                      <span className="whitespace-nowrap text-[11px] text-slate-500">
                        {period}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-slate-700">
                    {t(`${base}.summary`)}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    {project.stack.join(" · ")}
                  </p>
                </div>
              );
            })}
          </div>
        </ResumeSection>

        {/* Skills */}
        <ResumeSection title={t("resume.skills")}>
          <div className="space-y-1">
            {skillGroups.map((group) => (
              <p key={group.id} className="text-slate-700">
                <span className="font-semibold text-slate-900">
                  {t(`skills.groups.${group.id}`)}:
                </span>{" "}
                {group.skills.join(", ")}
              </p>
            ))}
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title={t("resume.education")}>
          <div className="space-y-1.5">
            {educationIds.map((id) => {
              const period = t(`experience.education.${id}.period`);
              return (
                <div
                  key={id}
                  className="flex items-baseline justify-between gap-4 break-inside-avoid"
                >
                  <h3 className="font-semibold text-slate-900">
                    {t(`experience.education.${id}.title`)}
                    <span className="font-normal text-slate-600">
                      {" "}
                      — {t(`experience.education.${id}.school`)}
                    </span>
                  </h3>
                  {period && (
                    <span className="whitespace-nowrap text-[11px] text-slate-500">
                      {period}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </ResumeSection>

        {/* Languages */}
        <ResumeSection title={t("resume.languages")}>
          <p className="text-slate-700">{personalLanguages.join("   ·   ")}</p>
        </ResumeSection>
      </div>
    </div>
  );
}
