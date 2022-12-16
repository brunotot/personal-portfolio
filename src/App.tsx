import "./App.scss";
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import Biography from "./components/Biography";
import Slogan from "./components/Slogan";
import Experiences from "./components/Experiences";
import Educations from "./components/Educations";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "./components/Skills";
import { ExperienceProficiencyValue } from "./components/SkillDescription";

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
			<Skills data={SKILLS_DATA_SET} />

			<Contact />
			<Footer />
		</div>
	);
}

export default App;
