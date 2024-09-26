import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <HomePage />
        <Skills />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
