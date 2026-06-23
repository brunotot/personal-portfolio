import { useState } from "react";
import { useTranslation } from "react-i18next";
import { featuredProject } from "../../data/projects";
import CaseStudyModal from "../ui/CaseStudyModal";
import DocsPreview from "../ui/DocsPreview";

export default function FeaturedProject() {
  const { t } = useTranslation();
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  const base = "projects.featured";
  const headingId = `featured-${featuredProject.id}`;
  const stats = t(`${base}.stats`, { returnObjects: true }) as {
    value: string;
    label: string;
  }[];

  return (
    <article
      aria-labelledby={headingId}
      data-aos="fade-up"
      className="group relative mb-10 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-canvas-raised via-surface to-canvas-raised p-1 shadow-sm"
    >
      {/* Premium gradient frame accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary-base/60 to-transparent"
      />
      <div className="relative grid gap-8 rounded-[1.4rem] bg-surface/40 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-center lg:gap-10">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-base/40 bg-primary-base/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-base">
              <span aria-hidden>★</span>
              {t(`${base}.label`)}
            </span>
            <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300">
              {t(`${base}.badge`)}
            </span>
          </div>

          <h3
            id={headingId}
            className="mt-4 text-2xl font-bold tracking-tight text-content sm:text-3xl"
          >
            {t(`${base}.title`)}
          </h3>
          <p className="mt-2 text-base font-medium leading-7 text-content-secondary">
            {t(`${base}.subtitle`)}
          </p>
          <p className="mt-3 text-sm leading-7 text-content-muted">
            {t(`${base}.description`)}
          </p>

          <dl className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-line bg-surface-subtle p-3"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-lg font-bold text-content sm:text-xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[0.7rem] leading-4 text-content-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label={t(`${base}.role`)}
          >
            {featuredProject.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-surface-subtle px-2.5 py-1 text-xs font-medium text-content-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setCaseStudyOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-base px-5 py-2.5 text-sm font-semibold text-on-primary shadow-sm transition hover:bg-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              {t(`${base}.cta`)}
              <span aria-hidden>→</span>
            </button>
            <a
              href="http://88.198.9.184/rgo-front-ui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line-strong px-5 py-2.5 text-sm font-semibold text-content-secondary transition hover:border-primary-base/60 hover:text-primary-base focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-base focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              {t(`${base}.docs`)}
              <span aria-hidden>↗</span>
            </a>
            <span className="text-sm font-medium text-content-muted">
              {t(`${base}.role`)}
            </span>
          </div>
        </div>

        <div className="hidden lg:block">
          <DocsPreview />
        </div>
      </div>

      <CaseStudyModal
        open={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
      />
    </article>
  );
}
