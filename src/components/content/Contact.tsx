import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import Section from "../ui/Section";
import ContactForm from "./../form/ContactForm";

const EMAIL = "brunotot10000@gmail.com";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Section
      id="contact"
      eyebrow={t("contact.eyebrow")}
      title={t("contact.title")}
      description={t("contact.description")}
      className="bg-canvas-raised"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="group surface flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-surface-hover text-content-secondary transition-colors group-hover:text-content">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-content-faint">
                {t("contact.emailLabel")}
              </span>
              <span className="text-sm font-medium text-content">{EMAIL}</span>
            </span>
          </a>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wide text-content-faint">
              {t("contact.elsewhere")}
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/btot/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2 text-sm font-medium text-content-secondary transition-colors hover:border-line-strong hover:text-content"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                LinkedIn
              </a>
              <a
                href="https://github.com/brunotot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-4 py-2 text-sm font-medium text-content-secondary transition-colors hover:border-line-strong hover:text-content"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </div>
          </div>

          <p className="flex items-center gap-2 text-sm text-content-muted">
            <span className="h-2 w-2 flex-none rounded-full bg-emerald-400" />
            {t("contact.availability")}
          </p>
        </div>

        <div className="surface rounded-2xl border border-line bg-surface">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
