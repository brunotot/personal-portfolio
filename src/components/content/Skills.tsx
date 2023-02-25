import TechCardList from "../ui/TechCardList";
import Section from "./../ui/Section";
import { TechCardGroupProps } from "./../ui/TechCardGroup";

const TECH_CARD_GROUPS: TechCardGroupProps[] = [
	{
		name: "Backend",
		cards: [
			{
				type: "java",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "gradle",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "springboot",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "Frontend",
		cards: [
			{
				type: "react",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "typescript",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "npm",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "Styling",
		cards: [
			{
				type: "tailwind",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "sass",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "mui",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "CI / CD",
		cards: [
			{
				type: "heroku",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "jenkins",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "git",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "github",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "Team",
		cards: [
			{
				type: "sonarqube",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				type: "jira",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "Database",
		cards: [
			{
				type: "mongodb",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
];

export default function Skills() {
	return (
		<Section
			title="Skills"
			id="skills"
			containerClassName="bg-secondary-darker text-secondary-light"
		>
			<TechCardList groups={TECH_CARD_GROUPS} />
		</Section>
	);
}
