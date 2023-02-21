import TechCardGroup, { TechCardGroupProps } from "./ui/TechCardGroup";

export type TechCardListProps = {
	groups: TechCardGroupProps[];
};

export default function TechCardList({ groups }: TechCardListProps) {
	return (
		<div className="bg-slate-500" id="skills">
			<div className="container mx-auto p-8">
				{groups.map((groupProps) => (
					<TechCardGroup key={groupProps.name} {...groupProps} />
				))}
			</div>
		</div>
	);
}
