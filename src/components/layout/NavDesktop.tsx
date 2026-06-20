import MenuIcon from "@mui/icons-material/Menu";
import PrintIcon from "@mui/icons-material/Print";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useRef } from "react";
import useNavActive from "../../hooks/useNavActive";
import NavLink from "../ui/NavLink";

export type NavDesktopProps = {
  handleDrawerToggle: () => void;
};

const NAV_ITEMS = [
  { label: "Work", section: "work" },
  { label: "Experience", section: "experience" },
  { label: "Skills", section: "skills" },
  { label: "Contact", section: "contact" },
];

export default function NavDesktop({ handleDrawerToggle }: NavDesktopProps) {
  const navLinks = useRef<HTMLAnchorElement[]>([]);
  const activeLink = useNavActive(navLinks);

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ "@media (min-width:720px)": { display: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="a"
        href="#home"
        className="font-jost whitespace-nowrap text-lg font-bold tracking-tight text-white no-underline transition-colors hover:text-primary-base"
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
            {item.label}
          </NavLink>
        ))}

        <Button
          type="button"
          variant="contained"
          endIcon={<PrintIcon />}
          onClick={() => window.print()}
          className="!bg-primary-base !text-secondary-darker font-jost"
        >
          Resume
        </Button>
      </Box>
    </>
  );
}
