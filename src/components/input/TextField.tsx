import { TextFieldProps, TextField as MUITextField } from "@mui/material";

export type TextFieldPropsGroup = TextFieldProps & {
	dark?: boolean;
};

export default function TextField(props: TextFieldPropsGroup) {
	const { dark = true, ...rest } = props;
	return (
		<MUITextField
			{...rest}
			InputLabelProps={{
				classes: {
					root: dark ? "!text-slate-400" : "",
				},
			}}
			InputProps={{
				classes: {
					root: dark ? "!text-slate-200" : "",
				},
			}}
		/>
	);
}
