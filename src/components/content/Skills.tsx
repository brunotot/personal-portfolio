import { useTranslation } from "react-i18next";
import { skillGroups, strengthIds } from "../../data/skills";
import Section from "./../ui/Section";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <Section
      id="skills"
      eyebrow={t("skills.eyebrow")}
      title={t("skills.title")}
      description={t("skills.description")}
      className="bg-canvas"
    >
      <div className="flex flex-wrap justify-center gap-4">
        {strengthIds.map((id, index) => (
          <div
            key={id}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            className="surface w-full max-w-sm rounded-2xl border border-line bg-surface p-6 sm:max-w-none sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
          >
            <h3 className="text-base font-semibold text-content">
              {t(`skills.strengths.${id}.title`)}
            </h3>
            <p className="mt-2 text-sm leading-6 text-content-secondary">
              {t(`skills.strengths.${id}.description`)}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-10 space-y-3">
        {skillGroups.map((group) => (
          <li
            key={group.id}
            className="flex gap-2 text-sm leading-7 text-content-secondary"
          >
            <span
              aria-hidden
              className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-primary-base"
            />
            <span>
              <span className="font-semibold text-content">
                {t(`skills.groups.${group.id}`)}
              </span>
              <span className="text-content-faint"> — </span>
              {group.skills.join(", ")}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
