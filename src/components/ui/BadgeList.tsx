import { ImageNameType } from "../../services/ImageService";
import Badge, { BadgeVariant } from "./Badge";

export type SkillsProps = {
	data: ImageNameType[];
	className?: string;
	variant?: BadgeVariant;
};

export default function BadgeList(props: SkillsProps) {
	const { data, className = "", variant } = props;
	return (
		<>
			{data.length > 0 && (
				<div className={`${className} flex flex-wrap gap-2`}>
					{data.map((type) => (
						<Badge key={type} type={type} variant={variant} />
					))}
				</div>
			)}
		</>
	);
}
