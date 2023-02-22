import TechCardGroup, { TechCardGroupProps } from "./TechCardGroup";

export type TechCardListProps = {
	groups: TechCardGroupProps[];
};

export default function TechCardList({ groups }: TechCardListProps) {
	return (
		<div className="p-8">
			{groups.map((groupProps) => (
				<TechCardGroup key={groupProps.name} {...groupProps} />
			))}
		</div>
	);
}
