import { skillGroups, strengths } from "../../data/skills";
import Section from "./../ui/Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical strengths"
      title="Skills and how I apply them"
      description="A frontend-leaning fullstack toolkit, used to ship and maintain real production applications."
      className="bg-secondary-darker"
    >
      <div className="flex flex-wrap justify-center gap-4">
        {strengths.map((strength, index) => (
          <div
            key={strength.title}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            className="surface w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:max-w-none sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
          >
            <h3 className="text-base font-semibold text-white">
              {strength.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {strength.description}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-10 space-y-3">
        {skillGroups.map((group) => (
          <li
            key={group.name}
            className="flex gap-2 text-sm leading-7 text-slate-300"
          >
            <span
              aria-hidden
              className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-primary-base"
            />
            <span>
              <span className="font-semibold text-white">{group.name}</span>
              <span className="text-slate-500"> — </span>
              {group.skills.join(", ")}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
