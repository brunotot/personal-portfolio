import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../ui/Section";
import ContactForm from "./../form/ContactForm";

const EMAIL = "brunotot10000@gmail.com";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together"
      description="Want to work together or talk about a frontend-heavy fullstack project? Reach out by email or connect with me on LinkedIn."
      className="bg-secondary-dark"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25"
          >
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-colors group-hover:text-white">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-wide text-slate-500">
                Email
              </span>
              <span className="text-sm font-medium text-white">{EMAIL}</span>
            </span>
          </a>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wide text-slate-500">
              Elsewhere
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/btot/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                LinkedIn
              </a>
              <a
                href="https://github.com/brunotot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
              >
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </div>
          </div>

          <p className="flex items-center gap-2 text-sm text-slate-400">
            <span className="h-2 w-2 flex-none rounded-full bg-emerald-400" />
            Open to new projects and collaborations
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
