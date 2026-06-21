import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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
        className="animate-glow pointer-events-none absolute -top-40 right-[-15%] h-[720px] w-[720px] rounded-full bg-primary-base blur-[150px] lg:right-[0%]"
        style={{ opacity: "var(--glow-opacity)" }}
      />
      <div
        className="relative mx-auto flex w-full max-w-[88rem] flex-col items-center text-center"
        data-aos="fade-up"
      >
        <p className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary-base sm:text-base">
          <span
            aria-hidden
            className="h-px w-10 flex-none bg-primary-base/60"
          />
          {t("company.hero.eyebrow")}
          <span
            aria-hidden
            className="h-px w-10 flex-none bg-primary-base/60"
          />
        </p>
        <h1 className="mx-auto mt-7 max-w-6xl text-balance text-4xl font-bold leading-[1.04] tracking-tight text-content sm:text-5xl lg:text-7xl xl:text-8xl">
          {t("company.hero.title")}
        </h1>
        <p className="font-fraunces mx-auto my-20 max-w-4xl text-balance text-2xl font-semibold leading-loose tracking-tight text-primary-base sm:text-3xl sm:leading-loose lg:my-24 lg:text-4xl lg:leading-[1.9]">
          {t("company.hero.description")}
        </p>

        <div className="flex w-full max-w-3xl flex-row flex-nowrap justify-center gap-4 sm:gap-6">
          <a
            href="#contact"
            className="sheen group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-primary-base px-10 py-6 text-xl font-bold text-secondary-darker transition-colors hover:bg-primary-light sm:text-2xl lg:px-12 lg:py-7 lg:text-3xl"
          >
            {t("company.hero.ctaPrimary")}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="nudge text-lg lg:text-2xl"
            />
          </a>
          <a
            href="#process"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl border-2 border-line-strong px-10 py-6 text-xl font-bold text-content transition-colors hover:border-primary-base/60 hover:text-primary-base sm:text-2xl lg:px-12 lg:py-7 lg:text-3xl"
          >
            {t("company.hero.ctaSecondary")}
          </a>
        </div>

        <ul className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {chips.map((chip) => (
            <li
              key={chip}
              className="lift flex items-center justify-center rounded-2xl border border-line bg-surface-subtle px-8 py-10 text-center text-xl font-medium text-content-secondary hover:border-primary-base/40 hover:text-content sm:text-2xl"
            >
              {chip}
            </li>
          ))}
        </ul>
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
            data-aos-delay={index * 100}
            className="surface lift group flex flex-col gap-5 rounded-2xl border border-line bg-surface p-8 hover:border-line-strong"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface-hover text-xl text-primary-base transition-transform duration-300 group-hover:scale-110">
              <FontAwesomeIcon icon={SERVICE_ICONS[index]} />
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
            data-aos-delay={(index % 3) * 100}
            className="surface lift group relative flex flex-col gap-4 rounded-2xl border border-line bg-surface p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary-base/40 text-base font-bold text-primary-base transition-colors duration-300 group-hover:bg-primary-base/10">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg font-semibold text-content">{step.title}</h3>
            <p className="text-base leading-7 text-content-secondary">
              {step.description}
            </p>
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
            data-aos-delay={(index % 3) * 100}
            className="lift group flex items-center gap-5 rounded-xl border border-line bg-surface-subtle px-6 py-6 hover:border-primary-base/40"
          >
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-surface-hover text-lg text-primary-base transition-transform duration-300 group-hover:scale-110">
              <FontAwesomeIcon
                icon={INDUSTRY_ICONS[index % INDUSTRY_ICONS.length]}
              />
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
            className="surface lift group flex gap-5 rounded-2xl border border-line bg-surface p-8 hover:border-line-strong"
          >
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-surface-hover text-xl text-primary-base transition-transform duration-300 group-hover:scale-110">
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
            className="surface lift flex flex-col gap-4 rounded-2xl border border-line bg-surface p-8 hover:border-line-strong"
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
          className="group surface lift flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 hover:border-line-strong"
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
            className="sheen group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-base px-5 py-2.5 text-sm font-semibold text-secondary-darker transition-colors hover:bg-primary-light"
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
          <span className="relative flex h-2 w-2 flex-none">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
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
