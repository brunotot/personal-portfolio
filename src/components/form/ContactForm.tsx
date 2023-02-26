import SendIcon from "@mui/icons-material/Send";
import TextField from "./TextField";
import { useRef, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import ToastService from "../../services/ToastService";
import EmailService from "../../services/EmailService";

const EMAIL_SUCCESS_MSG = "Email sent successfully!";
const EMAIL_ERROR_MSG = "Email failed to send! Please try again later...";

export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const form = useRef<any>();

	const onSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		try {
			await EmailService.send(form.current);
			ToastService.success(EMAIL_SUCCESS_MSG);
			form.current.reset();
		} catch (error) {
			ToastService.error(EMAIL_ERROR_MSG);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form
			ref={form}
			className="w-full flex flex-col gap-4 p-8 items-center"
			onSubmit={onSubmit}
		>
			<div className="flex w-full gap-4 flex-col md:flex-row">
				<TextField
					fullWidth
					name="user_name"
					type="text"
					label="Name"
					variant="filled"
					placeholder="John Doe"
				/>
				<TextField
					fullWidth
					name="user_email"
					type="email"
					label="Email"
					variant="filled"
					placeholder="john.doe@mail.com"
				/>
			</div>
			<TextField
				fullWidth
				name="user_subject"
				type="text"
				label="Subject"
				variant="filled"
				placeholder="Collaboration wanted ..."
			/>
			<TextField
				fullWidth
				name="user_message"
				type="text"
				label="Message"
				variant="filled"
				placeholder="I need ..."
				multiline
				rows={4}
			/>

			<LoadingButton
				endIcon={<SendIcon />}
				loading={loading}
				loadingPosition="end"
				variant="contained"
				type="submit"
				size="large"
				className={`font-jost ${
					loading
						? "!bg-primary-darker !text-tertiary-light"
						: "!bg-primary-base !text-tertiary-darker"
				}`}
			>
				<span>Send</span>
			</LoadingButton>
		</form>
	);
}
