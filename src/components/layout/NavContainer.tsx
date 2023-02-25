import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import logo from "./../../assets/img/logo.png";
import ThemePicker from "../ui/ThemePicker";

export type NavContainerProps = {
	drawerWidth?: number;
	children: React.ReactNode;
};

export default function NavContainer(props: NavContainerProps) {
	const { drawerWidth = 240, children } = props;

	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

	const mobileDrawer = (
		<Box component="nav">
			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{ keepMounted: true }}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
			>
				<NavMobile logo={logo} handleDrawerToggle={handleDrawerToggle} />
			</Drawer>
		</Box>
	);

	const desktopDrawer = (
		<AppBar component="nav" className="!transition-all !bg-secondary-darker">
			<Toolbar>
				<NavDesktop logo={logo} handleDrawerToggle={handleDrawerToggle} />
				<ThemePicker />
			</Toolbar>
		</AppBar>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			{desktopDrawer}
			{mobileDrawer}
			<Box component="main" sx={{ width: "100%" }}>
				<Toolbar className="!bg-secondary-dark" />
				{children}
			</Box>
		</Box>
	);
}
