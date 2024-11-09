import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { profilePhoto3 } from "../../assests";
import { PageTitle } from "../../components/PageTitle/PageTitle";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full h-auto py-3 border-b-[1px] border-b-black"
    >
      <div className="flex flex-col text-white pt-10">
        <PageTitle text1="Get To Know" text2="About Me" />
      </div>
      
      {/* Description Section */}
      <div className="w-full text-sm mdl:text-lg font-bodyFont leading-7 tracking-wide text-justify my-6">
        A fast learner and hardworking individual who strives for perfection in every endeavor. I thrive on learning new things and love to inspire and collaborate within a team environment to achieve excellence.
      </div>

      {/* Responsive Section */}
      <div className="w-full flex flex-col lg:flex-row gap-5 lgl:gap-40">
        {/* Profile Image */}
        <div className="w-full lg:w-2/5 flex justify-center items-center">
          <img
            src={profilePhoto3}
            alt="Profile"
            className="w-65 h-65 rounded-lg"
          />
        </div>

        {/* Education Section */}
        <div className="w-full lg:w-2/3 flex flex-col justify-start items-start">
          {/* Education Title */}
          <h2 className="text-2xl font-bold text-designColor mb-4">Education</h2>

          <div className="w-full max-w-[500px] p-4 bg-black/20 rounded-lg shadow-md space-y-8">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-white"></div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-white relative z-10"
                />
                <div className="text-lightText text-xs font-extralight ">
                  Nov 2018 – Jul 2023
                </div>
              </div>
              <div className="text-[#0097b2] text-sm font-bold mt-2">
              Bachelor of the Science of Engineering Honours
              </div>
              <div className="w-full text-white text-sm">
                University of Moratuwa
                <br />
                Moratuwa, Sri Lanka
              </div>
            </div>

            {/* Second Degree */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-white"></div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-white relative z-10"
                />
                <div className="text-lightText text-xs font-extralight">
                Dec 2022 – Aug 2023
                </div>
              </div>
              <div className="text-[#0097b2] text-sm font-bold mt-2">
              Diploma in Software Engineering
              </div>
              <div className="w-full text-white text-sm">
              Institute of Software Engineering
                <br />
                Panadura, Sri Lanka
              </div>
            </div>

            {/* Third Degree */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-white"></div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-white relative z-10"
                />
                <div className="text-lightText text-xs font-extralight">
                Mar 2015 – Aug 2017
                </div>
              </div>
              <div className="text-[#0097b2] text-sm font-bold mt-2">
                GCE Advanced Level Examination - Physical Science Stream
              </div>
              <div className="w-full text-white text-sm">
              Walasmulla National School
                <br />
                Walasmulla, Sri Lanka
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
