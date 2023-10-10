import React from "react";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Banner from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";

function App() {
  return (
  <div  className="w-full h-auto bg-bodyColor text-lightText ">
    <div className="max-w-screen-2xl mx-auto px-16">
      <Navbar/>
      <Banner/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
      
    </div>
    
  </div>
  );
}

export default App;
