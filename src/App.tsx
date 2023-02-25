import Footer from "./components/layout/Footer";
import NavContainer from "./components/layout/NavContainer";
import Biography from "./components/content/Biography";
import Slogan from "./components/content/Slogan";
import Experiences from "./components/content/Experiences";
import Educations from "./components/content/Educations";
import Contact from "./components/content/Contact";
import Projects from "./components/content/Projects";
import Skills from "./components/content/Skills";
import ThemeSwitcher from "./components/ui/ThemePicker";
import useAos from "./hooks/useAos";

function App() {
	useAos();

	return (
		<NavContainer>
			<div className="flex flex-col w-full">
				<Biography />
				<Slogan />
				<Experiences />
				<Educations />
				<Projects />
				<Skills />
				<Contact />
				<Footer />
			</div>
		</NavContainer>
	);
}

export default App;
