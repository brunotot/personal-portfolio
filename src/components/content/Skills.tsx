import ImageService from "../../services/ImageService";
import TechCardList from "../ui/TechCardList";
import Section from "./../ui/Section";
import { TechCardGroupProps } from "./../ui/TechCardGroup";

const TECH_CARD_GROUPS: TechCardGroupProps[] = [
	{
		name: "Backend",
		cards: [
			{
				href: "https://www.java.com/en/",
				logo: ImageService.java.src,
				title: "Java",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://gradle.org/",
				logo: ImageService.gradle.src,
				title: "Gradle",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://spring.io/",
				logo: ImageService.springboot.src,
				title: "Spring Boot",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "Frontend",
		cards: [
			{
				href: "https://reactjs.org/",
				logo: ImageService.react.src,
				title: "React",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://www.typescriptlang.org/",
				logo: ImageService.typescript.src,
				title: "TypeScript",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://www.npmjs.com/",
				logo: ImageService.npm.src,
				title: "NPM",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "Styling",
		cards: [
			{
				href: "https://tailwindcss.com/",
				logo: ImageService.tailwind.src,
				title: "TailwindCSS",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://sass-lang.com/",
				logo: ImageService.sass.src,
				title: "SASS",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://mui.com/",
				logo: ImageService.mui.src,
				title: "MaterialUI",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "CI / CD",
		cards: [
			{
				href: "https://dashboard.heroku.com/",
				logo: ImageService.heroku.src,
				title: "Heroku",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://www.jenkins.io/",
				logo: ImageService.jenkins.src,
				title: "Jenkins",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://git-scm.com/",
				logo: ImageService.git.src,
				title: "Git",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://github.com/",
				logo: ImageService.github.src,
				title: "GitHub",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "Team",
		cards: [
			{
				href: "https://www.sonarsource.com/products/sonarqube/",
				logo: ImageService.sonarqube.src,
				title: "SonarQube",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
			{
				href: "https://www.atlassian.com/software/jira",
				logo: ImageService.jira.src,
				title: "JIRA",
				description:
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.",
			},
		],
	},
	{
		name: "Database",
		cards: [
			{
				href: "https://www.mongodb.com/",
				logo: ImageService.mongodb.src,
				title: "MongoDB",
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
			containerClassName="bg-slate-500 text-slate-200"
		>
			<TechCardList groups={TECH_CARD_GROUPS} />
		</Section>
	);
}
