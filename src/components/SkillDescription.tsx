import { useMemo } from "react";
import { Rating } from "react-simple-star-rating";

export type ExperienceProficiencyValue =
	| 0
	| 0.5
	| 1
	| 1.5
	| 2
	| 2.5
	| 3
	| 3.5
	| 4
	| 4.5
	| 5;

export type ExperienceProficiencyType = {
	[key: string]: ExperienceProficiencyValue;
};

type ExperienceProficiencyDataSet = {
	[key in
		| "Novice"
		| "Beginner"
		| "Intermediate"
		| "Advanced"
		| "Proficient"
		| "Expert"
		| "Master"
		| "Elite"
		| "Authority"
		| "Legend"]: {
		value: ExperienceProficiencyValue;
		description: string;
	};
};

const EXPERIENCE_PROFICIENCY_DATA_SET: ExperienceProficiencyDataSet = {
	Novice: {
		value: 0.5,
		description:
			"A person who is just starting to learn a programming language and has limited or no experience with it.",
	},
	Beginner: {
		value: 1.0,
		description:
			"A person who has a basic understanding of the programming language and can write simple programs, but may still struggle with more complex concepts and tasks.",
	},
	Intermediate: {
		value: 1.5,
		description:
			"A person who has a good understanding of the programming language and can write moderate to complex programs, but may still need to refer to documentation or seek guidance from more experienced programmers.",
	},
	Advanced: {
		value: 2.0,
		description:
			"A person who has a deep understanding of the programming language and can write complex programs with ease, but may still be learning new features and capabilities of the language.",
	},
	Proficient: {
		value: 2.5,
		description:
			"A person who has a thorough understanding of the programming language and can write programs with ease, including debugging and troubleshooting.",
	},
	Expert: {
		value: 3.0,
		description:
			"A person who has a comprehensive understanding of the programming language, including advanced features and capabilities, and can write programs with a high level of efficiency and effectiveness.",
	},
	Master: {
		value: 3.5,
		description:
			"A person who has mastered the programming language and can write programs with a high level of complexity and efficiency, as well as mentor and teach others.",
	},
	Elite: {
		value: 4.0,
		description:
			"A person who is considered one of the top experts in the programming language and is highly sought after for their expertise and experience.",
	},
	Authority: {
		value: 4.5,
		description:
			"A person who is considered a leading authority in the programming language and is respected for their knowledge and contributions to the field.",
	},
	Legend: {
		value: 5,
		description:
			"A person who is considered a legend in the programming language and has made significant contributions to the field, influencing the direction of the language and shaping its development.",
	},
};

const TOOLTIP_ARRAY = Object.keys(EXPERIENCE_PROFICIENCY_DATA_SET).sort(
	(key1, key2) =>
		(EXPERIENCE_PROFICIENCY_DATA_SET as any)[key1].value >
		(EXPERIENCE_PROFICIENCY_DATA_SET as any)[key2].value
			? 1
			: -1
);

export type SkillDescriptionProps = {
	title: string;
	proficiency: ExperienceProficiencyValue;
};

export default function SkillDescription(props: SkillDescriptionProps) {
	const { title, proficiency } = props;

	const skillDescription = useMemo(
		() =>
			Object.values(EXPERIENCE_PROFICIENCY_DATA_SET).find(
				(o) => o.value === proficiency
			)?.description,
		[]
	);

	return (
		<div className="flex p-4 justify-center items-center flex-col gap-4 rounded border border-4 border-[var(--clr-blue-600)]">
			<p className="whitespace-nowrap font-bold text-3xl">{title}</p>
			<Rating
				allowFraction
				readonly
				showTooltip
				tooltipDefaultText="To learn in the future"
				initialValue={proficiency}
				tooltipArray={TOOLTIP_ARRAY}
			/>
			<p>{skillDescription}</p>
		</div>
	);
}
