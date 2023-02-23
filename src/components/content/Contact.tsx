import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./../form/ContactForm";
import Link from "./../ui/Link";

export default function Contact() {
	return (
		<div className="bg-slate-700" id="contact">
			<div className="container mx-auto relative text-slate-200 px-8 py-16">
				<p className="uppercase font-bold text-[2rem]">Contact me</p>
				<ContactForm />
				<div className="flex flex-col md:flex-row flex-wrap gap-x-12 gap-y-2 pl-0 md:pl-8">
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
			</div>
		</div>
	);
}
