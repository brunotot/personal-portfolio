import ProfilePhoto from "../images/ProfileImage";
import Link from "../ui/Link";
import Image from "../ui/Image";

export default function Biography() {
	return (
		<div className="bg-secondary-dark flex items-center flex-col lg:flex-row gap-4 pt-12">
			<div className="w-auto flex lg:self-end">
				<ProfilePhoto />
			</div>
			<div className="my-0 mx-auto text-center lg:text-left pb-12 px-8">
				<p
					className="text-3xl lg:text-4xl font-extralight text-primary-dark"
					data-aos="zoom-in"
				>
					Hi, I'm Bruno 👋
				</p>
				<p
					className="text-primary-base font-jost tracking-wide font-bold text-3xl lg:text-5xl mt-4"
					data-aos="zoom-in"
				>
					Fullstack Web Developer
				</p>
				<p
					className="text-primary-light font-jost tracking-wide text-lg mt-2"
					data-aos="zoom-in"
				>
					with a passion for building web apps and automatization
				</p>
				<p
					className="text-primary-light text-md mt-9 lg:max-w-xl"
					data-aos="zoom-in"
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
						classNameAppend="bg-white rounded-md"
					>
						<Image name="linkedin" />
					</Link>

					<Link href="https://stackoverflow.com/users/14260355/brunot">
						<Image name="stackoverflow" />
					</Link>

					<Link href="https://github.com/brunotot">
						<Image name="github" />
					</Link>
				</div>
			</div>
		</div>
	);
}
