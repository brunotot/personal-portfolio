import { useTranslation } from "react-i18next";
import {
  educationIds,
  experienceIds,
  experienceUrls,
} from "../../data/experience";
import Section from "./../ui/Section";

export default function Experiences() {
  const { t } = useTranslation();
  return (
    <Section
      id="experience"
      eyebrow={t("experience.eyebrow")}
      title={t("experience.title")}
      description={t("experience.description")}
      className="bg-canvas-raised"
    >
      <div className="space-y-6">
        {experienceIds.map((id, index) => {
          const highlights = t(`experience.items.${id}.highlights`, {
            returnObjects: true,
          }) as string[];
          return (
            <article
              key={id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="surface rounded-2xl border border-line bg-surface p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-bold text-content">
                  {t(`experience.items.${id}.title`)}
                </h3>
                <a
                  href={experienceUrls[id]}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-primary-base underline-offset-4 transition-colors hover:text-primary-light hover:underline"
                >
                  {t(`experience.items.${id}.company`)}
                </a>
              </div>
              <p className="mt-3 text-sm leading-7 text-content-secondary">
                {t(`experience.items.${id}.summary`)}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-content-secondary">
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
            </article>
          );
        })}
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-content-muted">
          {t("experience.educationTitle")}
        </h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {educationIds.map((id, index) => (
            <li
              key={id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="surface rounded-xl border border-line bg-surface p-4"
            >
              <p className="text-sm font-semibold text-content">
                {t(`experience.education.${id}.title`)}
              </p>
              <p className="mt-1 text-sm text-content-muted">
                {t(`experience.education.${id}.school`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
