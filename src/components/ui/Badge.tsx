import { Avatar, Chip } from "@mui/material";
import ImageService, { ImageNameType } from "../../services/ImageService";

export type BadgeProps =
	| {
			text: string;
			avatar?: ImageNameType;
			variant?: "outlined" | "filled";
	  }
	| {
			avatar: ImageNameType;
			text: never;
			variant?: "outlined" | "filled";
	  };

export default function Badge({
	text: textUnsanitized,
	avatar,
	variant,
}: BadgeProps) {
	const text = textUnsanitized
		? textUnsanitized
		: avatar
		? ImageService[avatar]
			? ImageService[avatar].name
			: avatar
		: avatar;
	return (
		<Chip
			style={{ color: "white" }}
			variant={variant}
			avatar={
				avatar && ImageService[avatar] ? (
					<Avatar src={ImageService[avatar].src} />
				) : undefined
			}
			label={text}
		/>
	);
}
