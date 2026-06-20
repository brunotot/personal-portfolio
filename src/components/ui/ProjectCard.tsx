import { Project, ProjectVisibility } from "../../data/projects";
import cn from "../../utils/cn";

const VISIBILITY_STYLES: Record<ProjectVisibility, string> = {
  public: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  private: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  internal: "border-sky-400/30 bg-sky-400/10 text-sky-300",
};

const VISIBILITY_LABELS: Record<ProjectVisibility, string> = {
  public: "Public",
  private: "Private",
  internal: "Internal",
};

export type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const {
    name,
    url,
    statusLabel,
    companies,
    role,
    period,
    summary,
    stack,
    highlights,
    visibility,
    ribbon,
  } = project;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm transition hover:border-primary-base/60 hover:bg-white/[0.05]",
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
        <h3
          className={cn(
            "text-xl font-bold tracking-tight text-white",
            Boolean(ribbon) && "pr-14",
          )}
        >
          {name}
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold",
              VISIBILITY_STYLES[visibility],
            )}
          >
            {VISIBILITY_LABELS[visibility]}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
            {statusLabel}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{summary}</p>

      <dl className="mt-5 space-y-2 text-sm">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2">
          <dt className="font-semibold text-slate-400 sm:w-20 sm:flex-none">
            Role
          </dt>
          <dd className="text-slate-300">{role}</dd>
        </div>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2">
          <dt className="font-semibold text-slate-400 sm:w-20 sm:flex-none">
            Company
          </dt>
          <dd className="text-slate-300">
            {companies.map((company, index) => (
              <span key={company.name}>
                {index > 0 && <span className="text-slate-500"> &amp; </span>}
                {company.url ? (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-200 underline decoration-white/20 underline-offset-2 transition-colors hover:text-primary-base hover:decoration-primary-base/60"
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
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2">
            <dt className="font-semibold text-slate-400 sm:w-20 sm:flex-none">
              Duration
            </dt>
            <dd className="text-slate-300">{period}</dd>
          </div>
        )}
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-200"
          >
            {tech}
          </li>
        ))}
      </ul>

      <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
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

      <div className="mt-6 pt-2">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-base transition-colors hover:text-primary-light"
          >
            Visit project
            <span aria-hidden>↗</span>
          </a>
        ) : (
          <p className="text-sm font-medium text-slate-400">
            Private project — details limited due to project privacy.
          </p>
        )}
      </div>
    </article>
  );
}
