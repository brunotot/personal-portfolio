import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../ui/Section";
import ContactForm from "./../form/ContactForm";
import Link from "./../ui/Link";

export default function Contact() {
	return (
		<Section
			title="Contact Me"
			id="contact"
			containerClassName="bg-secondary-dark"
		>
			<ContactForm />
			<div className="w-full flex flex-col md:flex-row flex-wrap gap-x-12 gap-y-2 pl-0 md:pl-8">
				<Link href="https://www.linkedin.com/in/btot/">
					<FontAwesomeIcon icon={faLinkedinIn} />
					<span>Bruno Tot</span>
				</Link>
				<Link href="+385 99 493 7239" type="tel">
					<FontAwesomeIcon icon={faPhone} />
					<span>+385 99 493 7239</span>
				</Link>
				<Link href="brunotot10000@gmail.com" type="mail">
					<FontAwesomeIcon icon={faEnvelope} />
					<span>brunotot10000@gmail.com</span>
				</Link>
			</div>
		</Section>
	);
}
