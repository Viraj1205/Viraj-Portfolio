import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import NavBar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Social from "./Components/Social";
import SocialLinks from "./Components/Sociallinks";

function App() {
  return (
    <div>
      <NavBar />
      <Social/>
      <Home />
      
      <About />
      <Portfolio />
      <Experience />
      <Contact />


      <SocialLinks />
    </div>
  );
}

export default App;

