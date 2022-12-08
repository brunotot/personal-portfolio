import "./App.scss";
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import Biography from "./components/Biography";
import Slogan from "./components/Slogan";
import Experiences from "./components/Experiences";
import Educations from "./components/Educations";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
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
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
