import React from 'react'
import { profilePhoto2 } from '../../assests'

const About = () => {
  return (
    <section id='about' className='w-full h-[800px] py-3 border-b-[1px] border-b-black'>
      <div className='font-titlefont' >
        <h1 className="text-designColor text-5xl font-bold py-5">About <span className='text-white'>Me</span> </h1>
      </div>
      <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
        <div className='w-2/5 flex flex-col gap-20 justify-center items-left'>
          <img
            className="w-[400px] h-auto lgl:w-[500px] lgl:h-[680px] z-10 justify-center items-center"
            src={profilePhoto2}
            alt="bannerImg"
          />
          <div className="absolute bottom-0 w-[400px] h-[500px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>

        </div>
        <div className='w-3/5 flex flex-col gap-6'>
          <div>
            <p className='text-base font-bodyFont leading-7 tracking-wide text-justify '>
              A fast learner and hardworking individual who strives for perfection in every endeavor.
              I thrive on learning new things and love to inspire and collaborate within a team environment to achieve excellence.
            </p>
          </div>
          <div>
            <ul className='w-full grid grid-cols-3 overflow-hidden '>
              <li><span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Education
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span></li>
              <li><span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Skills
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span></li>
              <li><span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                Acievements
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About