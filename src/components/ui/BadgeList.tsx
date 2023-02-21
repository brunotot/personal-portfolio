import { ImageNameType } from "../../services/ImageService";
import Badge from "./Badge";

export type SkillsProps = {
	data: ImageNameType[];
	className?: string;
};

function unique<T>(array: T[]) {
	return array.filter((item, i, arr) => arr.indexOf(item) === i);
}

export default function BadgeList(props: SkillsProps) {
	const { className = "" } = props;
	const data = unique(props.data).sort();

	return (
		<>
			{data.length > 0 && (
				<div className={`${className} flex flex-wrap gap-2`}>
					{data.map((avatar) => (
						<Badge key={avatar} avatar={avatar} text={""} />
					))}
				</div>
			)}
		</>
	);
}
