import { useRef } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useNavActive from "../../hooks/useNavActive";
import Logo from "../images/PersonalLogoImage";
import cv from "./../../assets/pdf/BrunoTotCV.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
import ThemePicker from "../ui/ThemePicker";

export type NavMobileProps = {
	handleDrawerToggle: () => void;
	logo: string;
};

export default function NavMobile(props: NavMobileProps) {
	const { handleDrawerToggle, logo } = props;
	const navLinks = useRef<HTMLAnchorElement[]>([]);
	const activeLink = useNavActive(navLinks);
	const activeClass = "bg-primary-dark text-primary-light";

	return (
		<Box
			onClick={handleDrawerToggle}
			className="!bg-white flex-1"
			sx={{ textAlign: "center" }}
		>
			<div className="flex justify-center py-4">
				<Logo src={logo} />
			</div>
			<Divider />
			<List>
				<ListItem disablePadding>
					<a
						href="#experience"
						className={`w-full ${
							activeLink === "experience" ? activeClass : ""
						}`}
						ref={(el) => navLinks.current.push(el!)}
					>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Experience" />
						</ListItemButton>
					</a>
				</ListItem>
				<ListItem disablePadding>
					<a
						href="#education"
						className={`w-full ${
							activeLink === "education" ? activeClass : ""
						}`}
						ref={(el) => navLinks.current.push(el!)}
					>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Education" />
						</ListItemButton>
					</a>
				</ListItem>
				<ListItem disablePadding>
					<a
						href="#projects"
						className={`w-full ${activeLink === "projects" ? activeClass : ""}`}
						ref={(el) => navLinks.current.push(el!)}
					>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Projects" />
						</ListItemButton>
					</a>
				</ListItem>
				<ListItem disablePadding>
					<a
						href="#skills"
						className={`w-full ${activeLink === "skills" ? activeClass : ""}`}
						ref={(el) => navLinks.current.push(el!)}
					>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Skills" />
						</ListItemButton>
					</a>
				</ListItem>
				<ListItem disablePadding>
					<a
						href="#contact"
						className={`w-full ${activeLink === "contact" ? activeClass : ""}`}
						ref={(el) => navLinks.current.push(el!)}
					>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary="Contact" />
						</ListItemButton>
					</a>
				</ListItem>
				<a href={cv} className="w-full" download>
					<Button
						type="button"
						variant="contained"
						endIcon={<DownloadIcon />}
						className="!bg-primary-base !text-tertiary-darker"
					>
						Resume
					</Button>
				</a>
			</List>
		</Box>
	);
}
