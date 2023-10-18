import React, { useState } from 'react';
import { profilePhoto2 } from '../../assests';
import Achievements from './Achievements';
import Education from './Education';
import Skills from './Skills';

const About = () => {
  const [educationData, setEducationData] = useState(true);
  const [skills, setSkills] = useState(false);
  const [achievements, setAchievements] = useState(false);

  return (
    <section id='about' className='w-full h-auto py-3 border-b-[1px]  border-b-black'>
      <div className='font-titlefont' >
        <h1 className="text-designColor text-5xl font-bold py-5">About <span className='text-white'>Me</span> </h1>
      </div>

      <div className='w-full flex flex-col  lgl:flex-row  justify-center items-center  gap-20 relative'>
        <div className=' w-full lgl:w-2/5 flex flex-col  lgl:mb-0 mb-10 justify-center items-center lgl:items-left mt-10'>
          <img
            className="w-[400px] h-[500px] justify-center items-center  z-10"
            src={profilePhoto2}
            alt="bannerImg"
          />
          <div className="w-[400px] h-[500px] absolute  bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>

        <div className=' w-full lgl:w-3/5 flex flex-col   gap-6'>
          <div >
            <p className='text-base font-bodyFont leading-7 tracking-wide text-justify '>
              A fast learner and hardworking individual who strives for perfection in every endeavor.
              I thrive on learning new things and love to inspire and collaborate within a team environment to achieve excellence.
            </p>
          </div>
          <div>
            <ul className='w-full text-lg font-semibold grid grid-cols-3 xl:grid-cols-3'>
              <li
                onClick={() =>
                  setEducationData(true) &
                  setSkills(false) &
                  setAchievements(false)
                }
                className={`${educationData ? "w-full  relative text-designColor duration-300 cursor-pointer " : "border-transparent"
                  }`}
              >
                Education
                <span
                  className={`${educationData ? "w-2/5 h-[2px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[-00%] group-hover:translate-x-10 transition-transform duration-300 " : "border-transparent"
                    }`}
                ></span>
              </li>
              <li
                onClick={() =>
                  setEducationData(false) &
                  setSkills(true) &
                  setAchievements(false)
                }
                className={`${skills ? "w-full  relative text-designColor duration-300 cursor-pointer  " : "border-transparent"
                  }`}
              >
                Skills
                <span
                  className={`${skills ? "w-1/4 h-[2px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[0%] group-hover:translate-x-10 transition-transform duration-300 " : "border-transparent"
                    }`}
                ></span>
              </li>
              <li
                onClick={() =>
                  setEducationData(false) &
                  setSkills(false) &
                  setAchievements(true)
                }
                className={`${achievements ? "w-full  relative text-designColor duration-300 cursor-pointer " : "border-transparent"
                  }`}
              >
                Achievements
                <span
                  className={`${achievements ? "w-2/4 h-[2px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[-00%] group-hover:translate-x-10 transition-transform duration-300 " : "border-transparent"
                    }`}
                ></span>
              </li>

            </ul>
            <div className='py-10'>
              {educationData && <Education />}
              {skills && <Skills />}
              {achievements && <Achievements />}
            </div>
          </div>
        </div>
      </div>




    </section>
  )
}

export default About