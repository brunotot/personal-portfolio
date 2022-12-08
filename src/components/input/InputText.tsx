import { useContext, useState } from "react";
import { FormContext } from "../form/Form";
import TextareaAutosize from "react-textarea-autosize";

export type InputTextProps = {
	name: string;
	label: string;
	className?: string;
	placeholder?: string;
	type?: "text" | "textarea" | "email";
};

export default function InputText(props: InputTextProps) {
	const { name, label, type = "text" } = props;
	const placeholderProp =
		(props.placeholder ?? "").length > 0 ? props.placeholder : " ";
	const context = useContext(FormContext);
	const { register, errors, watch } = context;
	const value = watch(name);
	const [placeholder, setPlaceholder] = useState(value ? placeholderProp : " ");
	const ariaDescribedBy = `${name}_input`;
	const errorMessage: string = (errors[name] as any)?.message ?? "";
	const hasErrors = errorMessage.length > 0;

	function onFocus() {
		setPlaceholder(placeholderProp);
	}

	function onBlur() {
		setPlaceholder(" ");
	}

	const inputBaseClassName =
		"block px-5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border appearance-none focus:outline-none focus:ring-0 peer";
	const labelBaseClassName =
		"absolute hover:cursor-text text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[var(--clr-blue-700)] ml-4 px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1";
	const inputErrorClassName = "border-red-500 focus:border-red-500";
	const inputValidClassName = "border-gray-300 focus:border-blue-600";
	const labelErrorClassName = "text-red-500 peer-focus:text-red-500";
	const labelValidClassName = "text-white peer-focus:text-blue-300";

	const inputClassName = `${inputBaseClassName} ${
		hasErrors ? inputErrorClassName : inputValidClassName
	}`;
	const labelClassName = `${labelBaseClassName} ${
		hasErrors ? labelErrorClassName : labelValidClassName
	}`;

	return (
		<div className="flex-1 w-full">
			<div className="relative">
				{type === "textarea" ? (
					<TextareaAutosize
						aria-describedby={ariaDescribedBy}
						onFocus={() => onFocus()}
						id={name}
						className={inputClassName}
						placeholder={placeholder}
						minRows={5}
						{...register(name, {
							onBlur,
						})}
					/>
				) : (
					<input
						aria-describedby={ariaDescribedBy}
						onFocus={() => onFocus()}
						type={type}
						id={name}
						className={inputClassName}
						placeholder={placeholder}
						{...register(name, {
							onBlur,
						})}
					/>
				)}
				<label htmlFor={name} className={labelClassName}>
					{label}
				</label>
			</div>
			{hasErrors && (
				<p id={ariaDescribedBy} className="mt-2 text-sm text-red-500">
					<span className="font-medium">{errorMessage}</span>
				</p>
			)}
		</div>
	);
}
