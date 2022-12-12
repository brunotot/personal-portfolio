import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";
import WavyText from "./WavyText";

export type TitleDirection = "middle" | "left" | "right";

export type TitleColorWeight = 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type GalleryProps = {
	gapX?: number;
	gapY?: number;
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
		gapX = 8,
		gapY = 8,
		titleDirection = "middle",
		className = "",
		titleColorWeight = 800,
	} = props;
	const childrenNormalized = Array.isArray(children) ? children : [children];
	const cardsContainerClassName =
		props.cardsContainerClassName ?? `w-full flex flex-wrap justify-center`;

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
					<WavyText colors="rainbow" text={title} useShadow={false} />
				</SectionTitle>
			)}
			<div className={`gap-x-${gapX} gap-y-${gapY} ${cardsContainerClassName}`}>
				{childrenNormalized.map((node, index) =>
					useChildWrapper ? (
						<div
							data-aos="zoom-in"
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
