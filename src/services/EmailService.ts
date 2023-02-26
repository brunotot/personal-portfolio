import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const SERVICE_ID = "service_c0nj0hn";
const TEMPLATE_ID = "template_v01isz4";
const PUBLIC_KEY = "RgwIUWBU2eFQyFyzq";

class EmailService {
	send(form: HTMLFormElement): Promise<EmailJSResponseStatus> {
		return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
	}
}

export default new EmailService();
