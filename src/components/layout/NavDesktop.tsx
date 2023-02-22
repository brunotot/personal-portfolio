import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import NavLink from "../ui/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "./../../assets/pdf/BrunoTotCV.pdf";
import Logo from "../images/PersonalLogoImage";

export type NavDesktopProps = {
	handleDrawerToggle: () => void;
	logo: string;
};

export default function NavDesktop(props: NavDesktopProps) {
	const { handleDrawerToggle, logo } = props;
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
					justifyContent: "space-evenly",
					marginLeft: "3rem",
				}}
			>
				<NavLink section="experience">Experience</NavLink>
				<NavLink section="education">Education</NavLink>
				<NavLink section="projects">Projects</NavLink>
				<NavLink section="skills">Skills</NavLink>
				<NavLink section="contact">Contact</NavLink>
				<NavLink
					className="whitespace-nowrap"
					href={cv}
					section="download-cv"
					download={true}
				>
					Download CV <FontAwesomeIcon icon={faDownload} />
				</NavLink>
			</Box>
		</>
	);
}
