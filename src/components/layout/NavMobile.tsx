import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PrintIcon from "@mui/icons-material/Print";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "../../theme/ThemeProvider";

export type NavMobileProps = {
  open: boolean;
  onClose: () => void;
};

const NAV_ITEMS = [
  { key: "nav.work", section: "work" },
  { key: "nav.experience", section: "experience" },
  { key: "nav.skills", section: "skills" },
  { key: "nav.contact", section: "contact" },
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
  const { t, i18n } = useTranslation();
  const { mode, toggleMode } = useThemeMode();
  const nextLang = i18n.language?.startsWith("hr") ? "en" : "hr";

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
        aria-label={t("nav.openMenu")}
        className={`absolute inset-y-0 left-0 flex w-[82%] max-w-xs flex-col border-r border-line bg-canvas shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <a
            href="#home"
            onClick={onClose}
            className="font-jost text-lg font-bold tracking-tight text-content no-underline transition-colors hover:text-primary-base"
          >
            Bruno Tot
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label={t("nav.closeMenu")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-content-secondary transition-colors hover:border-line-strong hover:text-content"
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
              className="group flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-content-secondary no-underline transition-colors hover:bg-surface-subtle hover:text-content"
            >
              <span>{t(item.key)}</span>
              <span
                aria-hidden
                className="text-content-faint transition-colors group-hover:text-primary-base"
              >
                &rarr;
              </span>
            </a>
          ))}
        </nav>

        <div className="flex gap-3 px-6 py-2">
          <button
            type="button"
            onClick={() => i18n.changeLanguage(nextLang)}
            aria-label={t("language.switchTo")}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line-strong px-5 py-2.5 text-sm font-semibold text-content-secondary transition-colors hover:border-primary-base/60 hover:text-primary-base"
          >
            {t(`language.${nextLang}`)}
          </button>
          <button
            type="button"
            onClick={toggleMode}
            aria-label={t(mode === "dark" ? "theme.toLight" : "theme.toDark")}
            className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-lg border border-line-strong text-content-secondary transition-colors hover:border-primary-base/60 hover:text-primary-base"
          >
            {mode === "dark" ? (
              <LightModeIcon fontSize="small" />
            ) : (
              <DarkModeIcon fontSize="small" />
            )}
          </button>
        </div>

        <div className="px-6 py-4">
          <button
            type="button"
            onClick={() => {
              onClose();
              window.print();
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-base px-5 py-2.5 text-sm font-semibold text-secondary-darker transition-colors hover:bg-primary-light"
          >
            {t("nav.resume")}
            <PrintIcon fontSize="small" />
          </button>
        </div>

        <div className="mt-auto border-t border-line px-6 py-5">
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-content-secondary transition-colors hover:border-line-strong hover:text-content"
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
