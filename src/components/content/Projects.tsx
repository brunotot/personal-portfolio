import { projects } from "../../data/projects";
import ProjectCarousel from "../ui/ProjectCarousel";
import Section from "../ui/Section";

export default function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Production apps I've worked on"
      description="A selection of professional projects across public systems, internal tools and legacy maintenance — focused on real, maintainable software rather than demos."
      className="bg-secondary-darker"
    >
      <ProjectCarousel projects={projects} />
    </Section>
  );
}
