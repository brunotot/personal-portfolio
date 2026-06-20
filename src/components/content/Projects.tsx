import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";
import ProjectCarousel from "../ui/ProjectCarousel";
import Section from "../ui/Section";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <Section
      id="work"
      eyebrow={t("projects.eyebrow")}
      title={t("projects.title")}
      description={t("projects.description")}
      className="bg-canvas"
    >
      <div data-aos="fade-up">
        <ProjectCarousel projects={projects} />
      </div>
    </Section>
  );
}
