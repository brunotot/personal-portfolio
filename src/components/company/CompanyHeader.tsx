import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { COMPANY } from "../../data/company";
import { useThemeMode } from "../../theme/ThemeProvider";

const NAV_ITEMS = [
  { key: "company.nav.services", href: "#services" },
  { key: "company.nav.process", href: "#process" },
  { key: "company.nav.industries", href: "#industries" },
  { key: "company.nav.about", href: "#about" },
  { key: "company.nav.contact", href: "#contact" },
];

export default function CompanyHeader() {
  const { t, i18n } = useTranslation();
  const { mode, toggleMode } = useThemeMode();

  const nextLang = i18n.language?.startsWith("hr") ? "en" : "hr";
  const toggleLanguage = () => i18n.changeLanguage(nextLang);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="font-jost whitespace-nowrap text-lg font-bold tracking-tight text-content no-underline transition-colors hover:text-primary-base"
        >
          {COMPANY.name}
        </a>

        <nav className="ml-6 hidden flex-1 items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-content-secondary transition-colors hover:text-primary-base"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link
            to="/"
            className="hidden rounded-md px-3 py-1.5 text-sm font-medium text-content-secondary transition-colors hover:text-primary-base sm:inline-flex"
          >
            {t("company.nav.backToPortfolio")}
          </Link>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t("language.switchTo")}
            className="font-jost rounded-md border border-line-strong px-3 py-1.5 text-sm font-semibold text-content-secondary transition-colors hover:border-primary-base/60 hover:text-primary-base"
          >
            {t(`language.${nextLang}`)}
          </button>

          <button
            type="button"
            onClick={toggleMode}
            aria-label={t(mode === "dark" ? "theme.toLight" : "theme.toDark")}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line-strong text-content-secondary transition-colors hover:border-primary-base/60 hover:text-primary-base"
          >
            {mode === "dark" ? (
              <LightModeIcon fontSize="small" />
            ) : (
              <DarkModeIcon fontSize="small" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden rounded-lg bg-primary-base px-4 py-2 text-sm font-semibold text-secondary-darker transition-colors hover:bg-primary-light sm:inline-flex"
          >
            {t("company.nav.cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
