import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./form/ContactForm";
import Link from "./ui/Link";

export default function Contact() {
	return (
		<div className="relative bg-[var(--clr-blue-700)] text-white px-8 py-16">
			<p className="uppercase text-[var(--clr-blue-300)] font-bold text-[2rem]">
				Contact me
			</p>
			<ContactForm />
			<div className="flex flex-col md:flex-row flex-wrap gap-x-12 gap-y-2 pl-8">
				<Link
					href="https://www.linkedin.com/in/btot/"
					text="Bruno Tot"
					icon={<FontAwesomeIcon icon={faLinkedinIn} />}
				/>
				<Link
					href="+385 99 493 7239"
					type="tel"
					icon={<FontAwesomeIcon icon={faPhone} />}
				/>
				<Link
					href="brunotot10000@gmail.com"
					icon={<FontAwesomeIcon icon={faEnvelope} />}
				/>
			</div>
		</div>
	);
}
