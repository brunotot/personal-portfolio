import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import PrintIcon from "@mui/icons-material/Print";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import useNavActive from "../../hooks/useNavActive";
import { useThemeMode } from "../../theme/ThemeProvider";
import NavLink from "../ui/NavLink";

export type NavDesktopProps = {
  handleDrawerToggle: () => void;
};

const NAV_ITEMS = [
  { key: "nav.work", section: "work" },
  { key: "nav.experience", section: "experience" },
  { key: "nav.skills", section: "skills" },
  { key: "nav.contact", section: "contact" },
];

export default function NavDesktop({ handleDrawerToggle }: NavDesktopProps) {
  const navLinks = useRef<HTMLAnchorElement[]>([]);
  const activeLink = useNavActive(navLinks);
  const { t, i18n } = useTranslation();
  const { mode, toggleMode } = useThemeMode();

  const nextLang = i18n.language?.startsWith("hr") ? "en" : "hr";
  const toggleLanguage = () => i18n.changeLanguage(nextLang);

  return (
    <>
      <IconButton
        color="inherit"
        aria-label={t("nav.openMenu")}
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ "@media (min-width:720px)": { display: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="a"
        href="#home"
        className="font-jost whitespace-nowrap text-lg font-bold tracking-tight text-content no-underline transition-colors hover:text-primary-base"
        sx={{
          flexGrow: 1,
          display: "none",
          "@media (min-width:720px)": { display: "block" },
        }}
      >
        Bruno Tot
      </Box>
      <Box
        sx={{
          display: "none",
          "@media (min-width:720px)": { display: "flex" },
          flexWrap: "wrap",
          columnGap: "2rem",
          rowGap: "0.25rem",
          marginRight: "2rem",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginLeft: "3rem",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.section}
            section={item.section}
            innerRef={(el) => navLinks.current.push(el!)}
            className={activeLink === item.section ? "!text-primary-base" : ""}
          >
            {t(item.key)}
          </NavLink>
        ))}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
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

          <Button
            type="button"
            variant="contained"
            endIcon={<PrintIcon />}
            onClick={() => window.print()}
            className="!bg-primary-base !text-secondary-darker font-jost"
          >
            {t("nav.resume")}
          </Button>
        </Box>
      </Box>
    </>
  );
}
