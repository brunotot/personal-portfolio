import { useEffect } from "react";
import AOS from "aos";

import { ExperienceProficiencyValue } from "./components/SkillDescription";
import { TechCardGroupProps } from "./components/ui/TechCardGroup";

import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import Biography from "./components/Biography";
import Slogan from "./components/Slogan";
import Experiences from "./components/Experiences";
import Educations from "./components/Educations";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechCardList from "./components/TechCardList";

import "./App.scss";
import "aos/dist/aos.css";
import ImageService from "./services/ImageService";

const SKILLS_DATA_SET: { [key: string]: ExperienceProficiencyValue } = {
	Java: 4.5,
	"Spring Boot": 4,
	JIRA: 3.5,
	Agile: 4,
	jQuery: 4.5,
	JavaScript: 4.5,
	Scrum: 4,
	Git: 3.5,
	Angular: 3.5,
	Jenkins: 2.5,
	NodeJS: 2.5,
	Testing: 3.5,
	CSS3: 4,
	React: 3.5,
	TypeScript: 3.5,
	Automatization: 2.5,
	"Web scraping": 2.5,
	"Bootstrap 5": 3.5,
	"IntelliJ IDEA": 3,
	SQL: 3,
	MyBatis: 3,
	HTML5: 5,
};

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

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="flex flex-col w-full">
			<div className="bg-header-biography-group">
				<Header />
				<Biography />
			</div>
			<Slogan />
			<Experiences />
			<Educations />
			<Projects />
			{/*<Skills data={SKILLS_DATA_SET} />*/}
			<TechCardList groups={TECH_CARD_GROUPS} />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
