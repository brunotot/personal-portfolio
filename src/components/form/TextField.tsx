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
          backgroundColor: "rgb(var(--canvas))",
        },
        "& .MuiInputBase-root:hover, & .MuiInputBase-root:has(input:focus, textarea:focus)":
          {
            backgroundColor: "var(--surface-hover)",
          },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--line)",
        },
        "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--line-strong) !important",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "var(--color-primary-base) !important",
          },
      }}
      InputLabelProps={{
        classes: {
          root: "!text-content-muted",
        },
      }}
      InputProps={{
        classes: {
          root: "!text-content",
        },
      }}
    />
  );
}
