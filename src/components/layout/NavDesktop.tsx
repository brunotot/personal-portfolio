import { useRef } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import NavLink from "../ui/NavLink";
import cv from "./../../assets/pdf/BrunoTotCV.pdf";
import Logo from "../images/PersonalLogoImage";
import useNavActive from "../../hooks/useNavActive";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ThemePicker from "../ui/ThemePicker";

export type NavDesktopProps = {
	handleDrawerToggle: () => void;
	logo: string;
};

export default function NavDesktop({
	handleDrawerToggle,
	logo,
}: NavDesktopProps) {
	const navLinks = useRef<HTMLAnchorElement[]>([]);
	const activeLink = useNavActive(navLinks);

	return (
		<>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="start"
				onClick={handleDrawerToggle}
				sx={{ display: { sm: "none" } }}
			>
				<MenuIcon />
			</IconButton>
			<Typography
				variant="h6"
				component="div"
				className="whitespace-nowrap"
				sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
			>
				<Logo src={logo} />
			</Typography>
			<Box
				sx={{
					display: { xs: "none", sm: "flex" },
					flexWrap: "wrap",
					columnGap: "2rem",
					rowGap: "0.25rem",
					marginRight: "2rem",
					justifyContent: "space-evenly",
					alignItems: "center",
					marginLeft: "3rem",
				}}
			>
				<NavLink
					section="experience"
					innerRef={(el) => navLinks.current.push(el!)}
					className={activeLink === "experience" ? "!text-primary-base" : ""}
				>
					Experience
				</NavLink>
				<NavLink
					section="education"
					innerRef={(el) => navLinks.current.push(el!)}
					className={activeLink === "education" ? "!text-primary-base" : ""}
				>
					Education
				</NavLink>
				<NavLink
					section="projects"
					innerRef={(el) => navLinks.current.push(el!)}
					className={activeLink === "projects" ? "!text-primary-base" : ""}
				>
					Projects
				</NavLink>
				<NavLink
					section="skills"
					innerRef={(el) => navLinks.current.push(el!)}
					className={activeLink === "skills" ? "!text-primary-base" : ""}
				>
					Skills
				</NavLink>
				<NavLink
					section="contact"
					innerRef={(el) => navLinks.current.push(el!)}
					className={activeLink === "contact" ? "!text-primary-base" : ""}
				>
					Contact
				</NavLink>
				{/*<NavLink
					className="whitespace-nowrap"
					href={cv}
					section="download-cv"
					download={true}
				></NavLink>*/}

				<a href={cv} download>
					<Button
						type="button"
						variant="contained"
						endIcon={<DownloadIcon />}
						className="!bg-primary-base !text-secondary-darker font-jost"
					>
						Resume
					</Button>
				</a>
			</Box>
		</>
	);
}
