import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faBullseye,
  faComments,
  faDumbbell,
  faEnvelope,
  faGears,
  faGraduationCap,
  faHandshake,
  faIndustry,
  faLaptopCode,
  faLifeRing,
  faLocationDot,
  faScrewdriverWrench,
  faShieldHalved,
  faTableCells,
  faUmbrellaBeach,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CompanyHeader from "../components/company/CompanyHeader";
import Section from "../components/ui/Section";
import { COMPANY } from "../data/company";
import useAos from "../hooks/useAos";

type TitledItem = { title: string; description: string };

const SERVICE_ICONS: IconDefinition[] = [faLaptopCode, faGears, faLifeRing];

const WHY_ICONS: IconDefinition[] = [
  faComments,
  faHandshake,
  faShieldHalved,
  faBullseye,
];

const INDUSTRY_ICONS: IconDefinition[] = [
  faDumbbell,
  faScrewdriverWrench,
  faGraduationCap,
  faUmbrellaBeach,
  faIndustry,
  faTableCells,
];

function Hero() {
  const { t } = useTranslation();
  const chips = t("company.hero.chips", { returnObjects: true }) as string[];

  const title = t("company.hero.title");
  const highlight = t("company.hero.titleHighlight");
  const [before, after] = highlight
    ? title.split(highlight)
    : [title, ""];

  return (
    <section
      id="home"
      className="relative flex min-h-[94vh] items-center overflow-hidden bg-canvas-raised px-6 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] h-[760px] w-[760px] rounded-full bg-primary-base blur-[160px] lg:right-[-5%]"
        style={{ opacity: "var(--glow-opacity)" }}
      />
      {/* Oversized brand watermark, agency-style */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-0 select-none font-jost text-[22vw] font-bold leading-none tracking-tighter text-content opacity-[0.03] sm:-bottom-16 lg:text-[18vw]"
      >
        {COMPANY.name}
      </span>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-9" data-aos="fade-up">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 text-sm font-medium text-content-secondary backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t("company.hero.status")}
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-base">
              {t("company.hero.eyebrow")}
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-[2.7rem] font-bold leading-[1.04] tracking-tight text-content sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            {before}
            {after !== "" && (
              <span className="relative whitespace-pre-wrap text-primary-base">
                {highlight}
              </span>
            )}
            {after}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-content-secondary sm:text-xl">
            {t("company.hero.description")}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-base px-7 py-3.5 text-base font-semibold text-secondary-darker transition-colors hover:bg-primary-light"
            >
              {t("company.hero.ctaPrimary")}
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-lg border border-line-strong px-7 py-3.5 text-base font-semibold text-content transition-colors hover:border-primary-base/60 hover:text-primary-base"
            >
              {t("company.hero.ctaSecondary")}
            </a>
          </div>
        </div>

        {/* Asymmetric meta column */}
        <div
          className="lg:col-span-3 lg:pb-2"
          data-aos="fade-up"
          data-aos-delay={150}
        >
          <ul className="flex flex-col gap-3 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            {chips.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-3 text-sm font-medium text-content-secondary"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[0.65rem] text-primary-base"
                />
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Facts() {
  const { t } = useTranslation();
  const items = t("company.facts.items", {
    returnObjects: true,
  }) as { value: string; label: string }[];

  return (
    <section className="border-y border-line bg-canvas px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.label}
            data-aos="fade-up"
            data-aos-delay={(index % 4) * 80}
            className="flex flex-col gap-3"
          >
            <span className="font-jost text-4xl font-bold tracking-tight text-content lg:text-5xl">
              {item.value}
            </span>
            <span aria-hidden className="h-px w-10 bg-primary-base" />
            <span className="text-sm leading-6 text-content-secondary">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const { t } = useTranslation();
  const items = t("company.services.items", {
    returnObjects: true,
  }) as TitledItem[];

  return (
    <Section
      id="services"
      spacious
      eyebrow={t("company.services.eyebrow")}
      title={t("company.services.title")}
      description={t("company.services.description")}
    >
      <div className="border-t border-line">
        {items.map((item, index) => (
          <div
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            className="group grid items-baseline gap-x-8 gap-y-5 border-b border-line py-10 transition-colors hover:bg-surface-subtle/40 sm:grid-cols-[auto_1fr] lg:grid-cols-[7rem_1fr_1.1fr] lg:py-12"
          >
            <span className="font-jost text-3xl font-bold tabular-nums text-primary-base/70 transition-colors group-hover:text-primary-base lg:text-4xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-surface-hover text-lg text-primary-base lg:hidden xl:flex">
                <FontAwesomeIcon icon={SERVICE_ICONS[index]} />
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-content lg:text-3xl">
                {item.title}
              </h3>
            </div>
            <p className="max-w-xl text-base leading-7 text-content-secondary lg:text-lg">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Process() {
  const { t } = useTranslation();
  const steps = t("company.process.steps", {
    returnObjects: true,
  }) as TitledItem[];

  return (
    <Section
      id="process"
      spacious
      eyebrow={t("company.process.eyebrow")}
      title={t("company.process.title")}
      description={t("company.process.description")}
      className="bg-canvas-raised"
    >
      <ol className="relative mx-auto max-w-4xl">
        {steps.map((step, index) => (
          <li
            key={step.title}
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 80}
            className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 pb-12 last:pb-0 sm:grid-cols-[4rem_1fr] sm:gap-x-8"
          >
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[1.25rem] top-12 h-[calc(100%-3rem)] w-px bg-line sm:left-8"
              />
            )}
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary-base/40 bg-canvas-raised font-jost text-sm font-bold text-primary-base sm:h-16 sm:w-16 sm:text-lg">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="pt-1.5 sm:pt-4">
              <h3 className="text-xl font-semibold text-content sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-content-secondary sm:text-lg">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Industries() {
  const { t } = useTranslation();
  const items = t("company.industries.items", {
    returnObjects: true,
  }) as string[];

  return (
    <Section
      id="industries"
      spacious
      eyebrow={t("company.industries.eyebrow")}
      title={t("company.industries.title")}
      description={t("company.industries.description")}
    >
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {items.map((item, index) => (
          <div
            key={item}
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 80}
            className="group inline-flex items-center gap-3 rounded-full border border-line bg-surface-subtle py-3 pl-3 pr-6 transition-colors hover:border-primary-base/50 hover:bg-surface"
          >
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-surface-hover text-primary-base transition-colors group-hover:bg-primary-base group-hover:text-secondary-darker">
              <FontAwesomeIcon icon={INDUSTRY_ICONS[index % INDUSTRY_ICONS.length]} />
            </span>
            <span className="text-base font-medium text-content sm:text-lg">
              {item}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhyUs() {
  const { t } = useTranslation();
  const items = t("company.why.items", {
    returnObjects: true,
  }) as TitledItem[];

  return (
    <Section
      id="why"
      spacious
      eyebrow={t("company.why.eyebrow")}
      title={t("company.why.title")}
      description={t("company.why.description")}
      className="bg-canvas-raised"
    >
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={(index % 2) * 100}
            className="flex flex-col gap-4 border-t border-line pt-7"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-hover text-xl text-primary-base">
              <FontAwesomeIcon icon={WHY_ICONS[index]} />
            </span>
            <h3 className="text-xl font-semibold text-content lg:text-2xl">
              {item.title}
            </h3>
            <p className="max-w-md text-base leading-7 text-content-secondary">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Work() {
  const { t } = useTranslation();

  return (
    <Section
      id="work"
      spacious
      eyebrow={t("company.work.eyebrow")}
      title={t("company.work.title")}
      description={t("company.work.description")}
    >
      <div
        data-aos="fade-up"
        className="surface flex flex-col items-center gap-4 rounded-2xl border border-dashed border-line-strong bg-surface px-6 py-24 text-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-surface-hover text-2xl text-primary-base">
          <FontAwesomeIcon icon={faLaptopCode} />
        </span>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-content-muted">
          {t("company.work.badge")}
        </p>
      </div>
    </Section>
  );
}

function About() {
  const { t } = useTranslation();
  const members = ["marin", "bruno"] as const;

  return (
    <Section
      id="about"
      spacious
      eyebrow={t("company.about.eyebrow")}
      title={t("company.about.title")}
      description={t("company.about.description")}
      className="bg-canvas-raised"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {members.map((member, index) => (
          <div
            key={member}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="surface flex flex-col gap-4 rounded-2xl border border-line bg-surface p-8"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-base text-xl font-bold text-secondary-darker">
              {(t(`company.about.members.${member}.name`) as string).charAt(0)}
            </span>
            <h3 className="text-xl font-semibold text-content">
              {t(`company.about.members.${member}.name`)}
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-base">
              {t(`company.about.members.${member}.role`)}
            </p>
            <p className="text-base leading-7 text-content-secondary">
              {t(`company.about.members.${member}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const { t } = useTranslation();

  return (
    <Section
      id="contact"
      spacious
      eyebrow={t("company.contact.eyebrow")}
      title={t("company.contact.title")}
      description={t("company.contact.description")}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <a
          href={`mailto:${COMPANY.email}`}
          className="group surface flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
        >
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-surface-hover text-content-secondary transition-colors group-hover:text-primary-base">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-content-faint">
              {t("company.contact.emailLabel")}
            </span>
            <span className="text-sm font-medium text-content">
              {COMPANY.email}
            </span>
          </span>
        </a>

        <div className="surface flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
          <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-surface-hover text-content-secondary">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span className="flex flex-col">
            <span className="text-xs uppercase tracking-wide text-content-faint">
              {t("company.contact.locationLabel")}
            </span>
            <span className="text-sm font-medium text-content">
              {COMPANY.location}
            </span>
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-base px-5 py-2.5 text-sm font-semibold text-secondary-darker transition-colors hover:bg-primary-light"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            {t("company.contact.cta")}
          </a>
          {COMPANY.links.linkedin && (
            <a
              href={COMPANY.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2.5 text-sm font-medium text-content-secondary transition-colors hover:border-primary-base/60 hover:text-content"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              LinkedIn
            </a>
          )}
          {COMPANY.links.github && (
            <a
              href={COMPANY.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2.5 text-sm font-medium text-content-secondary transition-colors hover:border-primary-base/60 hover:text-content"
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          )}
        </div>

        <p className="flex items-center gap-2 text-sm text-content-muted">
          <span className="h-2 w-2 flex-none rounded-full bg-emerald-400" />
          {t("company.contact.availability")}
        </p>
      </div>
    </Section>
  );
}

function CompanyFooter() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-canvas px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <span className="font-jost text-lg font-bold tracking-tight text-content">
          {COMPANY.name}
        </span>
        <p className="max-w-md text-sm text-content-secondary">
          {t("company.footer.tagline")}
        </p>
        <p className="text-xs text-content-faint">
          {t("company.footer.copyright", { year: currentYear })}
        </p>
      </div>
    </footer>
  );
}

export default function CompanyPage() {
  const { t, i18n } = useTranslation();

  useAos();

  // Keep the company landing page private: set its title and ask search
  // engines not to index it. Restores the previous state on unmount.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = t("company.meta.title");

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);

    return () => {
      document.title = previousTitle;
      robots.remove();
    };
  }, [t, i18n.language]);

  return (
    <div className="min-h-screen bg-canvas text-content">
      <CompanyHeader />
      <main>
        <Hero />
        <Facts />
        <Services />
        <Process />
        <Industries />
        <WhyUs />
        <Work />
        <About />
        <Contact />
      </main>
      <CompanyFooter />
    </div>
  );
}
