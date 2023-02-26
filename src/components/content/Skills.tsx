import TechCardList from "../ui/TechCardList";
import Section from "./../ui/Section";
import { TechCardGroupProps } from "./../ui/TechCardGroup";

const PLACEHOLDER =
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos neque laudantium dicta. Fugiat, quaerat.";

const TECH_CARD_GROUPS: TechCardGroupProps[] = [
	{
		name: "Backend",
		cards: [
			{
				type: "java",
				description:
					"I use Java 17+ as my primary backend language. I also like to use it when coding web scrapers and crawlers.",
			},
			{
				type: "gradle",
				description:
					"I use Gradle as my primary Java build tool. It is excellent at building production-ready code.",
			},
			{
				type: "springboot",
				description:
					"I use Spring Boot 3 as my primary backend server container.",
			},
		],
	},
	{
		name: "Frontend",
		cards: [
			{
				type: "react",
				description:
					"I use React 18+ as my primary frontend framework and live in its environment since 2022.",
			},
			{
				type: "typescript",
				description:
					"When it comes to JavaScript, I always use TypeScript to ensure type safety and clean code aesthetics.",
			},
			{
				type: "npm",
				description:
					"When it comes to client-side package managers, I always use NPM. I've also published some libraries there.",
			},
		],
	},
	{
		name: "Styling",
		cards: [
			{
				type: "tailwind",
				description:
					"This is something I've instantly fallen in love with. Tailwind makes it a breeze to create responsive designs using only HTML",
			},
			{
				type: "sass",
				description:
					"I prefer writing SASS instead of CSS due to a more cleaner and readable code.",
			},
			{
				type: "mui",
				description:
					"Regarding component libraries I always choose MUI because of its wide range of options and rapid development.",
			},
		],
	},
	{
		name: "CI / CD",
		cards: [
			{
				type: "heroku",
				description:
					"When it comes to personal projects, I prefer using Heroku as my cloud platform as a service. It allows for a quick setup and deployment-ready applications.",
			},
			{
				type: "jenkins",
				description:
					"I prefer using Jenkins as my pipeline build and management tool. Been using Jenkins since the beginning of my professional career in 2021.",
			},
			{
				type: "git",
				description:
					"I use Git as my primary version control system. Fun fact: I always resolve conflicts through the CLI.",
			},
			{
				type: "github",
				description:
					"When it comes to personal projects, I prefer using GitHub as my primary Git repository hosting service.",
			},
		],
	},
	{
		name: "Team",
		cards: [
			{
				type: "sonarqube",
				description: PLACEHOLDER,
			},
			{
				type: "jira",
				description:
					"When it comes to managing tasks and sprints, I prefer using JIRA since I find it elegant and easy to use. Been using JIRA since the beginning of my profesional career.",
			},
		],
	},
	{
		name: "Database",
		cards: [
			{
				type: "mongodb",
				description:
					"As per the database choice, I like using MongoDB in a Spring Boot eco-system. This is a NoSQL database which I'm still learning and improving knowledge on.",
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
