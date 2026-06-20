import { useEffect, useState } from "react";
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

  const [highlightsOpen, setHighlightsOpen] = useState(false);

  useEffect(() => {
    if (!highlightsOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHighlightsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [highlightsOpen]);

  return (
    <article
      className={cn(
        "group surface relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm transition hover:border-primary-base/60 hover:bg-white/[0.05]",
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
        <div className="flex flex-row items-center justify-between gap-2 sm:justify-start">
          <dt className="font-semibold text-slate-400 sm:w-20 sm:flex-none">
            Role
          </dt>
          <dd className="text-right text-slate-300 sm:text-left">{role}</dd>
        </div>
        <div className="flex flex-row items-center justify-between gap-2 sm:justify-start">
          <dt className="font-semibold text-slate-400 sm:w-20 sm:flex-none">
            Company
          </dt>
          <dd className="text-right text-slate-300 sm:text-left">
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
          <div className="flex flex-row items-center justify-between gap-2 sm:justify-start">
            <dt className="font-semibold text-slate-400 sm:w-20 sm:flex-none">
              Duration
            </dt>
            <dd className="text-right text-slate-300 sm:text-left">{period}</dd>
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

      <ul className="mt-5 hidden space-y-2 text-sm leading-6 text-slate-300 sm:block">
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

      <button
        type="button"
        onClick={() => setHighlightsOpen(true)}
        className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-white/30 hover:text-white sm:hidden"
      >
        View highlights
        <span aria-hidden>→</span>
      </button>

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

      {highlightsOpen && (
        <div className="fixed inset-0 z-[1300] flex items-center justify-center p-4 sm:hidden">
          <div
            onClick={() => setHighlightsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${name} highlights`}
            className="surface relative z-10 max-h-[80vh] w-full max-w-sm overflow-y-auto rounded-2xl border border-white/10 bg-secondary-darker p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-base font-bold tracking-tight text-white">
                {name} — highlights
              </h4>
              <button
                type="button"
                onClick={() => setHighlightsOpen(false)}
                aria-label="Close"
                className="flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
              >
                <span aria-hidden className="text-lg leading-none">
                  ×
                </span>
              </button>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
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
          </div>
        </div>
      )}
    </article>
  );
}
