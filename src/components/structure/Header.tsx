import Logo from "../Logo";
import NavLink from "../ui/NavLink";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<header className="header">
			<nav className="nav">
				<Logo />
				<span className="flex-1"></span>
				<NavLink section="experience">Experience</NavLink>
				<NavLink section="education">Education</NavLink>
				<NavLink section="projects">Projects</NavLink>
				<NavLink section="skills">Skills</NavLink>
				<NavLink className="whitespace-nowrap" section="download-cv">
					Download CV <FontAwesomeIcon icon={faDownload} />
				</NavLink>
			</nav>
		</header>
	);
}
