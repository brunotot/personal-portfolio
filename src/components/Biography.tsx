import ProfilePhoto from "./ProfilePhoto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faStackOverflow,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Biography() {
	return (
		<div className="flex items-center flex-col md:flex-row gap-4 mt-12">
			<div className="w-auto flex self-auto md:self-end">
				<ProfilePhoto />
			</div>
			<div className="w-full my-0 mx-auto text-center md:text-left md:w-1/2 p-4 pb-12 md:pb-4">
				<p
					className="bio-name text-3xl md:text-4xl font-extralight"
					data-aos="fade-right"
				>
					I'm Bruno
				</p>
				<p
					className="font-jost tracking-wide bio-heading font-bold text-3xl md:text-5xl mt-4"
					data-aos="fade-left"
				>
					Fullstack Web Developer
				</p>
				<p
					className="font-jost tracking-wide bio-subheading text-lg mt-2"
					data-aos="fade-right"
				>
					with a passion for building web apps and automatization
				</p>
				<p
					className="bio-description text-md mt-9 md:max-w-xl"
					data-aos="fade-left"
				>
					Software development attracted me after finishing High school and only
					proceeded to fall in love with it at Zagreb University of Applied
					Sciences. I focus in delivering high quality web apps and reusable
					component libraries with 3 years of professional experience in Java,
					Spring Boot, Thymeleaf and JavaScript/jQuery.
					<br />
					<br />
					Outside developer walls I play chess and save the world :)
				</p>
				<div className="flex gap-3 mt-5 justify-center md:justify-start">
					<FontAwesomeIcon icon={faLinkedin} size="2x" />
					<FontAwesomeIcon icon={faStackOverflow} size="2x" />
					<FontAwesomeIcon icon={faGithub} size="2x" />
				</div>
			</div>
		</div>
	);
}
