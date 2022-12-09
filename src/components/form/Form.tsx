import { AnyObjectSchema } from "yup";
import {
	useForm,
	UseFormRegister,
	FieldErrors,
	UseFormWatch,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext } from "react";

export type FormProps = {
	schema: AnyObjectSchema;
	onSubmit: (data: any) => void;
	className?: string;
	children: any;
};

export type FormContextType = {
	errors: FieldErrors<any>;
	register: UseFormRegister<any>;
	watch: UseFormWatch<any>;
};

export const FormContext = createContext<FormContextType>(null as any);

export default function Form(props: FormProps) {
	const { schema, onSubmit, children, className } = props;

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const context = {
		errors,
		register,
		watch,
	};

	return (
		<FormContext.Provider value={context}>
			<form className={`w-full ${className}`} onSubmit={handleSubmit(onSubmit)}>
				{children}
			</form>
		</FormContext.Provider>
	);
}
