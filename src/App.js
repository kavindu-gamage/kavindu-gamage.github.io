import React, { useEffect, useState } from "react";

import { TERipple } from "tw-elements-react";
import Footer from "./pages/footer/Footer";
import AboutMe from "./pages/getToKnow/AboutMe";
import Banner from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";
import Services from "./pages/services/Services";
import Technologies from "./pages/skills/Technologies";

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <div  className="w-full h-auto bg-bodyColor text-lightText ">
    <div className="max-w-screen-2xl mx-auto mdl:px-16 px-10">
      <Navbar/>
      <Banner/>
      <Services/>
      <AboutMe/>
     <Technologies/>
      {/* <About/>
      <Projects/>
      <Experience/>
      <Contact/> */}
      <Footer/>

    </div>
      {/* <!-- Back to top button --> */}
      {showButton && (
        <TERipple rippleColor="light">
          <button
            type="button"
            onClick={backToTop}
            className={` ${
              showButton ? `inline-block` : `hidden`
            } fixed bottom-[40px] right-[40px] p-3 bg-black bg-opacity-25 border border-gray-800 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full shadow-md  hover:text-designColor hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  hover:-translate-y-1 active:shadow-lg transition duration-150 ease-in-out`}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-4 h-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
        </TERipple>
      )}
  </div>
  );
}

export default App;
