import { TextField as MUITextField, TextFieldProps } from "@mui/material";

export type TextFieldPropsGroup = TextFieldProps & {};

export default function TextField(props: TextFieldPropsGroup) {
  const { ...rest } = props;
  return (
    <MUITextField
      variant="outlined"
      {...rest}
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: "var(--color-secondary-darker)",
        },
        "& .MuiInputBase-root:hover, & .MuiInputBase-root:has(input:focus, textarea:focus)":
          {
            backgroundColor: "var(--color-tertiary-darker)",
          },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgb(255 255 255 / 0.12)",
        },
        "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "rgb(255 255 255 / 0.25) !important",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "rgb(255 255 255 / 0.4) !important",
          },
      }}
      InputLabelProps={{
        classes: {
          root: "!text-slate-400",
        },
      }}
      InputProps={{
        classes: {
          root: "!text-slate-100",
        },
      }}
    />
  );
}
