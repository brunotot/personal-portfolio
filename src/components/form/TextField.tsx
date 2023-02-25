import { TextFieldProps, TextField as MUITextField } from "@mui/material";

export type TextFieldPropsGroup = TextFieldProps & {};

export default function TextField(props: TextFieldPropsGroup) {
	const { ...rest } = props;
	return (
		<MUITextField
			{...rest}
			sx={{
				"& .MuiInputBase-root": {
					backgroundColor: "var(--color-secondary-darker)",
				},
				"& .MuiInputBase-root:hover, & .MuiInputBase-root:has(input:focus, textarea:focus)":
					{
						backgroundColor: "var(--color-tertiary-darker)",
					},
				"& .MuiInputBase-root:hover:before": {
					borderBottomColor: "var(--color-primary-dark) !important",
				},
				"& .MuiInputBase-root:before": {
					borderBottomColor: "var(--color-primary-darker)",
				},
				"& .MuiInputBase-root:after": {
					borderBottomColor: "var(--color-primary-base)",
				},
			}}
			InputLabelProps={{
				classes: {
					root: "!text-primary-dark",
				},
			}}
			InputProps={{
				classes: {
					root: "!text-primary-light",
				},
			}}
		/>
	);
}
