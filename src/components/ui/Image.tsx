import ImageService, { ImageNameType } from "../../services/ImageService";

export type ImageProps = {
	name: ImageNameType;
	width?: number;
	height?: number;
	className?: string;
};

export default function Image(props: ImageProps) {
	const { name, width = 40, height = 40, className = "" } = props;
	return (
		<img
			className={className}
			src={ImageService[name].src}
			width={width}
			height={height}
			alt={ImageService[name].name}
		/>
	);
}
