import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState } from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import logo from "./../../assets/img/logo.png";

export type NavContainerProps = {
	drawerWidth?: number;
	children: React.ReactNode;
};

export default function NavContainer(props: NavContainerProps) {
	const { drawerWidth = 200, children } = props;

	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window,
	});

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
		<AppBar
			component="nav"
			className={`!transition-all !bg-slate-700 ${
				trigger ? "!bg-opacity-80" : "!bg-opacity-100"
			}`}
		>
			<Toolbar>
				<NavDesktop logo={logo} handleDrawerToggle={handleDrawerToggle} />
			</Toolbar>
		</AppBar>
	);

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			{desktopDrawer}
			{mobileDrawer}
			<Box component="main" sx={{ width: "100%" }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
}
