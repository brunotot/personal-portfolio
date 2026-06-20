import ProfilePhoto from "../images/ProfileImage";
import Image from "../ui/Image";
import Link from "../ui/Link";

const HERO = {
  eyebrow: "Fullstack Developer • TypeScript React / Java Spring Boot",
  title: "I build production web apps with a frontend edge.",
  description:
    "I'm Bruno Tot, a fullstack developer from Zagreb focused on React, TypeScript and Java Spring Boot. I work on domain-heavy business applications, polished frontend flows, reusable UI systems and backend integrations that need to stay maintainable in production.",
};

const CHIPS = [
  "4+ years professional experience",
  "React + TypeScript frontend",
  "Java Spring Boot backend",
  "Production business systems",
  "Frontend architecture",
];

export default function Biography() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-secondary-dark px-6 pt-12 sm:px-8 lg:px-12 lg:pt-20"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-15%] h-[560px] w-[560px] rounded-full bg-primary-base/30 blur-[130px] lg:right-[0%]"
      />
      <div className="relative mx-auto grid max-w-6xl items-stretch gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div data-aos="fade-up" className="min-w-0">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-base">
            <span
              aria-hidden
              className="h-px w-8 flex-none bg-primary-base/60"
            />
            {HERO.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {HERO.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {HERO.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-primary-base px-5 py-2.5 text-sm font-semibold text-secondary-darker transition-colors hover:bg-primary-light"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-primary-base/60 hover:text-primary-base"
            >
              Contact me
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
              >
                {chip}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3 lg:mb-20">
            <Link
              href="https://www.linkedin.com/in/btot/"
              classNameAppend="bg-white rounded-md"
            >
              <Image name="linkedin" />
            </Link>

            <Link href="https://stackoverflow.com/users/14260355/brunot">
              <Image name="stackoverflow" />
            </Link>

            <Link href="https://github.com/brunotot">
              <Image name="github" />
            </Link>
          </div>
        </div>

        <div
          className="flex min-w-0 justify-center mb-20 lg:mb-0 lg:justify-end"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
