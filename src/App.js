import "./App.css";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Navbar from "./Components/NavBar/Navbar";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <div  classNam="container">
        <About />
        <Skills />
        <WorkExperience />
        <ContactMe />
        <Footer />
        </div>
        
      </main>
    </div>
  );
}

export default App;
