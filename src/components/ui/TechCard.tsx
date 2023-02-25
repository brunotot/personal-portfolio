import ImageService, { ImageNameType } from "../../services/ImageService";

export type TechCardProps = {
	type: ImageNameType;
	description: string;
};

export default function TechCard(props: TechCardProps) {
	const { description, type } = props;
	const { name, src, web } = ImageService[type];
	return (
		<div
			data-aos="zoom-in"
			className="transition-transform duration-300 md:aspect-[1.25/1] px-8 py-6 md:w-80 rounded bg-tertiary-darker font-jost border border-primary-darker text-center flex flex-col"
		>
			<div className="w-full flex justify-center mb-3">
				<img src={src} className="object-contain aspect-square w-[64px]" />
			</div>
			<a
				href={web}
				className="text-tertiary-light text-xl mb-1"
				target="_blank"
			>
				{name}
			</a>
			<p className="text-tertiary-base flex-1">{description}</p>
		</div>
	);
}
