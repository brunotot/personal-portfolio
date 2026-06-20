import { education, experience } from "../../data/experience";
import Section from "./../ui/Section";

export default function Experiences() {
  return (
    <Section
      id="experience"
      eyebrow="Experience snapshot"
      title="Where I've delivered production work"
      description="Over 4+ years across long-running public systems and active product development, working close to real business domains."
      className="bg-secondary-dark"
    >
      <div className="space-y-6">
        {experience.map((item, index) => (
          <article
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            className="surface rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm font-medium text-primary-base">
                {item.company}
              </p>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.summary}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              {item.highlights.map((highlight) => (
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
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
          Education
        </h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {education.map((item, index) => (
            <li
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="surface rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-400">{item.school}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
