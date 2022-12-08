import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

export type TitleDirection = "middle" | "left" | "right";

export type TitleColorWeight = 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type GalleryProps = {
	gap?: number;
	useChildWrapper?: boolean;
	id?: string;
	title?: string;
	children: ReactNode | ReactNode[];
	titleDirection?: TitleDirection;
	titleColorWeight?: TitleColorWeight;
	className?: string;
	cardsContainerClassName?: string;
};

export default function Gallery(props: GalleryProps) {
	const {
		id,
		title,
		children,
		useChildWrapper = true,
		gap = 8,
		titleDirection = "middle",
		className = "",
		titleColorWeight = 800,
	} = props;
	const childrenNormalized = Array.isArray(children) ? children : [children];
	const cardsContainerClassName =
		props.cardsContainerClassName ??
		`w-full flex flex-wrap justify-center gap-${gap}`;

	const flexDirectionClass =
		titleDirection === "right"
			? "flex-col md:flex-row-reverse"
			: titleDirection === "left"
			? "flex-col md:flex-row"
			: "";

	return (
		<div
			className={`px-8 py-16 flex ${className} ${flexDirectionClass}`}
			id={id}
		>
			{title && (
				<SectionTitle colorWeight={titleColorWeight} direction={titleDirection}>
					{title}
				</SectionTitle>
			)}
			<div className={cardsContainerClassName}>
				{childrenNormalized.map((node, index) =>
					useChildWrapper ? (
						<div
							key={index}
							className="bg-white flex basis-full md:basis-[calc(50%-1rem)] xl:basis-[calc(33%-2rem)] flex-col p-4 rounded border card-shadow"
						>
							{node}
						</div>
					) : (
						node
					)
				)}
			</div>
		</div>
	);
}
