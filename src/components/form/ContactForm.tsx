import * as yup from "yup";
import Form from "./Form";
import InputText from "../input/InputText";
import SendButtonSvg from "../svg/SendButtonSvg";
import EnvelopeSvg from "../svg/EnvelopeSvg";

export interface IContactType {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		subject: yup.string().required(),
		message: yup.string().required(),
	})
	.required();

export default function ContactForm() {
	const onSubmit = (data: IContactType) => console.log(data);

	return (
		<Form
			className="flex flex-col gap-4 p-8 items-center"
			onSubmit={onSubmit}
			schema={schema}
		>
			<div className="flex w-full gap-4 flex-col md:flex-row">
				<InputText name="name" placeholder="John Doe" label="Name" />
				<InputText
					name="email"
					type="email"
					placeholder="john.doe@mail.com"
					label="Email"
				/>
			</div>
			<InputText
				name="subject"
				placeholder="Collaboration wanted ..."
				label="Subject"
			/>
			<InputText
				name="message"
				type="textarea"
				placeholder="I need ..."
				label="Message"
			/>

			<EnvelopeSvg className="absolute pointer-events-none top-24" />

			<button
				type="submit"
				className="mt-2 hover:rounded hover:outline hover:outline-1 hover:outline-offset-8"
			>
				<SendButtonSvg />
			</button>
		</Form>
	);
}
