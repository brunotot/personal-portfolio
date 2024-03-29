import Hr from "./HorizontalLine";
import TechCard, { TechCardProps } from "./TechCard";

export type TechCardGroupProps = {
	name: string;
	cards: TechCardProps[];
};

export default function TechCardGroup({ name, cards }: TechCardGroupProps) {
	return (
		<div className="flex flex-col">
			<Hr text={name} />
			<div className="flex flex-wrap justify-center px-0 py-8 md:p-8 gap-4">
				{cards.map((cardProps) => (
					<TechCard key={cardProps.type} {...cardProps} />
				))}
			</div>
		</div>
	);
}
