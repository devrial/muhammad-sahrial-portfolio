import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Experience from "./components/sections/Experience/Experience";
import Services from "./components/sections/Services/Services";
import AyahFullstack from "./components/sections/AyahFullstack/AyahFullstack";
import Contact from "./components/sections/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <AyahFullstack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
