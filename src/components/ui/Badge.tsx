import { Avatar, Chip } from "@mui/material";
import ImageService, { ImageNameType } from "../../services/ImageService";

export type BadgeVariant = "outlined" | "filled";

export type BadgeProps = {
	type: ImageNameType;
	variant?: BadgeVariant;
};

export default function Badge({ type, variant }: BadgeProps) {
	const { src, web, name } = ImageService[type];
	return (
		<Chip
			style={{ color: "white" }}
			component="a"
			target="_blank"
			variant={variant}
			href={web}
			avatar={<Avatar src={src} />}
			label={name}
			clickable
		/>
	);
}
