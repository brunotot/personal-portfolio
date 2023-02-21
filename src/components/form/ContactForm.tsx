import * as yup from "yup";
import Form from "./Form";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextField from "../input/TextField";

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
				<TextField
					fullWidth
					type="text"
					label="Name"
					variant="filled"
					placeholder="John Doe"
				/>
				<TextField
					fullWidth
					type="email"
					label="Email"
					variant="filled"
					placeholder="john.doe@mail.com"
				/>
			</div>
			<TextField
				fullWidth
				type="text"
				label="Subject"
				variant="filled"
				placeholder="Collaboration wanted ..."
			/>
			<TextField
				fullWidth
				type="text"
				label="Message"
				variant="filled"
				placeholder="I need ..."
				multiline
				rows={4}
			/>

			<Button
				type="submit"
				variant="contained"
				endIcon={<SendIcon />}
				size="large"
			>
				Send
			</Button>
		</Form>
	);
}
