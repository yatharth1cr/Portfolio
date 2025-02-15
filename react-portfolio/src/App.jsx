import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/nav";
import Projects from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
