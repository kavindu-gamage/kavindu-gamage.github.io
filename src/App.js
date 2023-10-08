import React from "react";

import About from "./components/about/About";
import Banner from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
  <div  className="w-full h-auto bg-bodyColor text-lightText ">
    <div className="max-w-screen-2xl mx-auto px-16">
      <Navbar/>
      <Banner/>
      <About/>
    </div>
    
  </div>
  );
}

export default App;
