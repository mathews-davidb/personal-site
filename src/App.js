import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/AboutMe";
import Navbar from "./components/navigation/Navbar";
import NavProvider from "./components/navigation/NavContext";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer autclose={5000} position="top-right" />
      <div className="appContainer">
        <NavProvider>
          <Navbar />
          <main>
            {/* <Home /> */}

            <AboutMe />
            <Projects />
            <Contact />
          </main>
        </NavProvider>
      </div>
    </>
  );
}

export default App;
