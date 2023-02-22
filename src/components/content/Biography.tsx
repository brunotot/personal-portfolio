import ProfilePhoto from "../images/ProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faStackOverflow,
	faGithub,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "../ui/Link";

export default function Biography() {
	return (
		<div className="biography flex items-center flex-col lg:flex-row gap-4 pt-12">
			<div className="w-auto flex lg:self-end">
				<ProfilePhoto />
			</div>
			<div className="my-0 mx-auto text-center lg:text-left pb-12 px-8">
				<p
					className="bio-name text-3xl lg:text-4xl font-extralight"
					data-aos="fade-right"
				>
					I'm Bruno
				</p>
				<p
					className="font-jost tracking-wide bio-heading font-bold text-3xl lg:text-5xl mt-4"
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
					className="bio-description text-md mt-9 lg:max-w-xl"
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
				<div className="flex gap-3 mt-5 justify-center lg:justify-start">
					<Link
						href="https://www.linkedin.com/in/btot/"
						icon={<FontAwesomeIcon size="2x" icon={faLinkedinIn} />}
					/>
					<Link
						href="https://stackoverflow.com/users/14260355/brunot"
						icon={<FontAwesomeIcon size="2x" icon={faStackOverflow} />}
					/>
					<Link
						href="https://github.com/brunotot/"
						icon={<FontAwesomeIcon size="2x" icon={faGithub} />}
					/>
				</div>
			</div>
		</div>
	);
}
