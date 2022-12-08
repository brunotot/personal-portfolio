import { TitleColorWeight, TitleDirection } from "./Gallery";

export type SectionTitleProps = {
	direction?: TitleDirection;
	children: string;
	colorWeight?: TitleColorWeight;
};

export default function SectionTitle({
	children,
	direction = "middle",
	colorWeight = 800,
}: SectionTitleProps) {
	const centeringClass =
		direction === "middle" ? "text-center" : "text-left md:text-right";

	const paddingClass =
		direction === "middle"
			? "pb-8 md:pb-0"
			: direction === "left"
			? "pl-0 pb-8 md:pb-0 md:pl-12"
			: "pr-0 pb-8 md:pb-0 md:pr-12";

	return (
		<h2
			data-text-direction={direction}
			className={`${paddingClass} text-[var(--clr-blue-${colorWeight})] uppercase font-bold text-[2rem] ${centeringClass}`}
		>
			{children}
		</h2>
	);
}
