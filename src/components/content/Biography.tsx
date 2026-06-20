import { useTranslation } from "react-i18next";
import ProfilePhoto from "../images/ProfileImage";
import Image from "../ui/Image";
import Link from "../ui/Link";

export default function Biography() {
  const { t } = useTranslation();
  const chips = t("hero.chips", { returnObjects: true }) as string[];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-canvas-raised px-6 pt-12 sm:px-8 lg:px-12 lg:pt-20"
    >
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-15%] h-[560px] w-[560px] rounded-full bg-primary-base blur-[130px] lg:right-[0%]"
        style={{ opacity: "var(--glow-opacity)" }}
      />
      <div className="relative mx-auto grid max-w-6xl items-stretch gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div data-aos="fade-up" className="min-w-0">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-base">
            <span
              aria-hidden
              className="h-px w-8 flex-none bg-primary-base/60"
            />
            {t("hero.eyebrow")}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-content sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-content-secondary sm:text-lg">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-primary-base px-5 py-2.5 text-sm font-semibold text-secondary-darker transition-colors hover:bg-primary-light"
            >
              {t("hero.ctaWork")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-line-strong px-5 py-2.5 text-sm font-semibold text-content transition-colors hover:border-primary-base/60 hover:text-primary-base"
            >
              {t("hero.ctaContact")}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-line bg-surface-subtle px-3 py-1 text-xs font-medium text-content-secondary"
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
