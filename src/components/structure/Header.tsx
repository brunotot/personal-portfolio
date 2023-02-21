import NavLink from "../ui/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "./../../assets/pdf/BrunoTotCV.pdf";

export default function Header() {
	return (
		<>
			<div className="nav">
				<input type="checkbox" id="nav-check" />
				<div className="nav-header">
					<div className="nav-title"></div>
				</div>
				<div className="nav-btn">
					<label htmlFor="nav-check">
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>

				<div className="nav-links">
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
				</div>
			</div>
		</>
	);
}
