import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../images/PersonalLogoImage";
import cv from "./../../assets/pdf/BrunoTotCV.pdf";

export type NavMobileProps = {
	handleDrawerToggle: () => void;
	logo: string;
};

export default function NavMobile(props: NavMobileProps) {
	const { handleDrawerToggle, logo } = props;
	return (
		<Box
			onClick={handleDrawerToggle}
			className="!bg-slate-100 flex-1"
			sx={{ textAlign: "center" }}
		>
			<div className="flex justify-center py-4">
				<Logo src={logo} />
			</div>
			<Divider />
			<List>
				<ListItem disablePadding>
					<a href="#experience" className="w-full">
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Experience" />
						</ListItemButton>
					</a>
				</ListItem>
				<ListItem disablePadding>
					<a href="#education" className="w-full">
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Education" />
						</ListItemButton>
					</a>
				</ListItem>
				<ListItem disablePadding>
					<a href="#projects" className="w-full">
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Projects" />
						</ListItemButton>
					</a>
				</ListItem>
				<ListItem disablePadding>
					<a href="#skills" className="w-full">
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Skills" />
						</ListItemButton>
					</a>
				</ListItem>
				<ListItem disablePadding>
					<a href="#contact" className="w-full">
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Contact" />
						</ListItemButton>
					</a>
				</ListItem>
				<ListItem disablePadding>
					<a href={cv} className="w-full" download>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Download CV" />
						</ListItemButton>
					</a>
				</ListItem>
			</List>
		</Box>
	);
}
