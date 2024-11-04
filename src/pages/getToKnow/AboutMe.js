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
      <div className="w-full flex flex-col lg:flex-row gap-40">
        {/* Profile Image */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <img
            src={profilePhoto3}
            alt="Profile"
            className="w-65 h-65 rounded-lg"
          />
        </div>

        {/* Education Section */}
        <div className="w-full lg:w-2/3 flex flex-col justify-start items-start">
          {/* Education Title */}
          <h2 className="text-2xl font-bold text-[#0097b2] mb-4">Education</h2>

          <div className="w-full max-w-[500px] p-4 bg-black/20 rounded-lg shadow-md space-y-6">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-[2px] h-full bg-white"></div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-white relative z-10"
                />
                <div className="text-white text-xs font-extralight">
                  2022 - Present
                </div>
              </div>
              <div className="text-[#0097b2] text-sm font-bold">
                Academic Degree
              </div>
              <div className="w-full text-white text-sm">
                Lorem ipsum dolor sit amet quo ei simul
                <br />
                congue exerci ad nec admodum perfecto.
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
                <div className="text-white text-xs font-extralight">
                  2022 - Present
                </div>
              </div>
              <div className="text-[#0097b2] text-sm font-bold">
                Academic Degree
              </div>
              <div className="w-full text-white text-sm">
                Lorem ipsum dolor sit amet quo ei simul
                <br />
                congue exerci ad nec admodum perfecto.
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
                <div className="text-white text-xs font-extralight">
                  2022 - Present
                </div>
              </div>
              <div className="text-[#0097b2] text-sm font-bold">
                Academic Degree
              </div>
              <div className="w-full text-white text-sm">
                Lorem ipsum dolor sit amet quo ei simul
                <br />
                congue exerci ad nec admodum perfecto.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
