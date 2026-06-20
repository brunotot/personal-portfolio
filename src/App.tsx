import "./assets/scss/scrollbar.scss";
import Biography from "./components/content/Biography";
import Contact from "./components/content/Contact";
import Experiences from "./components/content/Experiences";
import Projects from "./components/content/Projects";
import ResumeDocument from "./components/content/ResumeDocument";
import Skills from "./components/content/Skills";
import Footer from "./components/layout/Footer";
import NavContainer from "./components/layout/NavContainer";
import ScrollToTop from "./components/ui/ScrollToTop";
import ToastContainer from "./components/ui/ToastContainer";
import useAos from "./hooks/useAos";

function App() {
  useAos();

  return (
    <>
      <div className="print:hidden">
        <NavContainer>
          <div className="flex flex-col w-full">
            <Biography />
            <Projects />
            <Experiences />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </NavContainer>
        <ScrollToTop />
        <ToastContainer />
      </div>
      <ResumeDocument />
    </>
  );
}

export default App;
