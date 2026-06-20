import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@mui/icons-material/Close";
import PrintIcon from "@mui/icons-material/Print";
import { useEffect } from "react";

export type NavMobileProps = {
  open: boolean;
  onClose: () => void;
};

const NAV_ITEMS = [
  { label: "Work", section: "work" },
  { label: "Experience", section: "experience" },
  { label: "Skills", section: "skills" },
  { label: "Contact", section: "contact" },
];

const SOCIALS = [
  {
    label: "Email",
    href: "mailto:brunotot10000@gmail.com",
    icon: faEnvelope,
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/btot/",
    icon: faLinkedinIn,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/brunotot",
    icon: faGithub,
    external: true,
  },
];

export default function NavMobile({ open, onClose }: NavMobileProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[1300] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`absolute inset-y-0 left-0 flex w-[82%] max-w-xs flex-col border-r border-white/10 bg-secondary-darker shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <a
            href="#home"
            onClick={onClose}
            className="font-jost text-lg font-bold tracking-tight text-white no-underline transition-colors hover:text-primary-base"
          >
            Bruno Tot
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        <nav className="flex flex-col px-3 py-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              onClick={onClose}
              className="group flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-slate-200 no-underline transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              <span>{item.label}</span>
              <span
                aria-hidden
                className="text-slate-600 transition-colors group-hover:text-primary-base"
              >
                &rarr;
              </span>
            </a>
          ))}
        </nav>

        <div className="px-6 py-4">
          <button
            type="button"
            onClick={() => {
              onClose();
              window.print();
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-base px-5 py-2.5 text-sm font-semibold text-secondary-darker transition-colors hover:bg-primary-light"
          >
            Resume
            <PrintIcon fontSize="small" />
          </button>
        </div>

        <div className="mt-auto border-t border-white/10 px-6 py-5">
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
