import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Project, ProjectVisibility } from "../../data/projects";
import cn from "../../utils/cn";

const VISIBILITY_STYLES: Record<ProjectVisibility, string> = {
  public: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  private: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  internal: "border-sky-400/30 bg-sky-400/10 text-sky-300",
};

export type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const { id, name, url, companies, stack, visibility, ribbon } = project;
  const { t } = useTranslation();

  const base = `projects.items.${id}`;
  const statusLabel = t(`${base}.statusLabel`);
  const role = t(`${base}.role`);
  const period = t(`${base}.period`);
  const summary = t(`${base}.summary`);
  const highlights = t(`${base}.highlights`, {
    returnObjects: true,
  }) as string[];

  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <article
      className={cn(
        "group surface relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-sm transition hover:border-primary-base/60 hover:bg-surface-hover",
        className,
      )}
    >
      {ribbon && (
        <div
          className="pointer-events-none absolute right-0 top-0 h-24 w-24 overflow-hidden"
          aria-hidden="true"
        >
          <span className="absolute right-[-42px] top-[20px] w-[150px] rotate-45 bg-primary-base py-1 text-center text-xs font-bold tracking-wide text-secondary-darker shadow-md">
            {ribbon}
          </span>
        </div>
      )}
      <div className="flex flex-col gap-3">
        <div
          className={cn(
            "flex flex-wrap items-center gap-x-3 gap-y-1",
            Boolean(ribbon) && "pr-14",
          )}
        >
          <h3 className="text-xl font-bold tracking-tight text-content">
            {name}
          </h3>
          {url && (
            <>
              <span aria-hidden className="text-content-faint">
                •
              </span>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary-base transition-colors hover:text-primary-light"
              >
                {t("projects.visit")}
                <span aria-hidden>↗</span>
              </a>
            </>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold",
              VISIBILITY_STYLES[visibility],
            )}
          >
            {t(`projects.visibility.${visibility}`)}
          </span>
          <span className="rounded-full border border-line bg-surface-subtle px-3 py-1 text-xs font-medium text-content-secondary">
            {statusLabel}
          </span>
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm leading-6 text-content-secondary">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary-base"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <dl className="mt-5 space-y-2 text-sm">
        <div className="flex flex-row items-center justify-between gap-2 sm:justify-start">
          <dt className="font-semibold text-content-muted sm:w-20 sm:flex-none">
            {t("projects.fields.role")}
          </dt>
          <dd className="text-right text-content-secondary sm:text-left">
            {role}
          </dd>
        </div>
        <div className="flex flex-row items-center justify-between gap-2 sm:justify-start">
          <dt className="font-semibold text-content-muted sm:w-20 sm:flex-none">
            {t("projects.fields.company")}
          </dt>
          <dd className="text-right text-content-secondary sm:text-left">
            {companies.map((company, index) => (
              <span key={company.name}>
                {index > 0 && (
                  <span className="text-content-faint"> &amp; </span>
                )}
                {company.url ? (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-content-secondary underline decoration-content/20 underline-offset-2 transition-colors hover:text-primary-base hover:decoration-primary-base/60"
                  >
                    {company.name}
                  </a>
                ) : (
                  <span>{company.name}</span>
                )}
              </span>
            ))}
          </dd>
        </div>
        {period && (
          <div className="flex flex-row items-center justify-between gap-2 sm:justify-start">
            <dt className="font-semibold text-content-muted sm:w-20 sm:flex-none">
              {t("projects.fields.duration")}
            </dt>
            <dd className="text-right text-content-secondary sm:text-left">
              {period}
            </dd>
          </div>
        )}
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-line bg-surface-subtle px-2.5 py-1 text-xs font-medium text-content-secondary"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setDetailsOpen((open) => !open)}
          aria-expanded={detailsOpen}
          aria-controls={`project-details-${id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line-strong px-4 py-2 text-sm font-semibold text-content-secondary transition-colors hover:border-line-strong hover:text-content sm:w-fit"
        >
          {detailsOpen ? t("projects.hideDetails") : t("projects.viewDetails")}
          <span
            aria-hidden
            className={cn(
              "transition-transform duration-300",
              detailsOpen && "rotate-180",
            )}
          >
            ▾
          </span>
        </button>

        <div
          id={`project-details-${id}`}
          className={cn(
            "grid transition-all duration-300 ease-out",
            detailsOpen
              ? "mt-4 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <p className="text-sm leading-7 text-content-secondary">
              {summary}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
