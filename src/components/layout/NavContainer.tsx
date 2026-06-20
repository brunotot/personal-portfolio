import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export type NavContainerProps = {
  children: React.ReactNode;
};

export default function NavContainer(props: NavContainerProps) {
  const { children } = props;

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);
  const closeMenu = () => setMobileOpen(false);

  const desktopDrawer = (
    <AppBar
      component="nav"
      elevation={0}
      className="!transition-all !bg-canvas border-b border-line"
    >
      <Toolbar>
        <NavDesktop handleDrawerToggle={handleDrawerToggle} />
      </Toolbar>
    </AppBar>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {desktopDrawer}
      <NavMobile open={mobileOpen} onClose={closeMenu} />
      <Box component="main" sx={{ width: "100%" }}>
        <Toolbar className="!bg-canvas-raised" />
        {children}
      </Box>
    </Box>
  );
}
