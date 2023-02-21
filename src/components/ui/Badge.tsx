import { Avatar, Chip } from "@mui/material";
import ImageService, { ImageNameType } from "../../services/ImageService";

export type BadgeProps =
	| {
			text: string;
			avatar?: ImageNameType;
	  }
	| {
			avatar: ImageNameType;
			text: never;
	  };

export default function Badge({ text: textUnsanitized, avatar }: BadgeProps) {
	const text = textUnsanitized
		? textUnsanitized
		: avatar
		? ImageService[avatar]
			? ImageService[avatar].name
			: avatar
		: avatar;
	return (
		<Chip
			avatar={
				avatar && ImageService[avatar] ? (
					<Avatar src={ImageService[avatar].src} />
				) : undefined
			}
			label={text}
		/>
	);
}
