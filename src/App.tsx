import Footer from "./components/layout/Footer";
import NavContainer from "./components/layout/NavContainer";
import Biography from "./components/content/Biography";
import Slogan from "./components/content/Slogan";
import Experiences from "./components/content/Experiences";
import Educations from "./components/content/Educations";
import Contact from "./components/content/Contact";
import Projects from "./components/content/Projects";
import Skills from "./components/content/Skills";
import useAos from "./hooks/useAos";
import ToastContainer from "./components/ui/ToastContainer";
import "./assets/scss/scrollbar.scss";

function App() {
	useAos();

	return (
		<>
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
			<ToastContainer />
		</>
	);
}

export default App;
