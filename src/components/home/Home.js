import React from 'react';
import { FaGithub, FaInstagram, FaJava, FaLinkedinIn, FaReact, FaStackOverflow } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { SiSpringboot } from "react-icons/si";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { homeCover } from '../../assests/index';
const Home = () => {
  const [text] = useTypewriter({
    words: ["Software Developer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <section id='home' className='w-full h-[700px] pt-28  flex  border-b-[1px] font-titleFont border-b-black'>
      <div className='w-3/5 flex flex-col gap-20'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-xl font-normal'>Hello <span className='text-3xl'>👋.</span></h2>
          <h1 className="text-5xl font-bold text-white">
            I'm <span className="text-designColor capitalize">Kavindu Gamage</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-7 tracking-wide text-justify">
          As a developer, I transform ideas into seamless digital experiences. 
          My code bridges imagination and reality, crafting user-friendly solutions that drive business success. 
          I'm passionate about pushing the boundaries of technology to create innovative solutions that leave a lasting impact.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between" >
          <div>
            <h2 className="text-base uppercase font-titleFont mt-[-5px] mb-4">Expertise In</h2>
            <div className="flex  gap-4">
              <span className="bannerIcon">
                <FaJava />
              </span>
              <span className="bannerIcon">
                <SiSpringboot />
              </span>
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <GrMysql />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lgl:w-2/5 flex justify-center items-center relative ">
        <img
          className="w-[480px] h-auto lgl:w-[150px] lgl:h-[680px] z-10 ml-20 mt-[-200px]  "
          src={homeCover}
          alt="bannerImg"
        />
        {/* <div className="absolute bottom-70 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
      </div>
      <div className="flex flex-col  gap-8 mt-15">
        <span className="bannerIconSocial">
          <FaGithub />
        </span>
        <span className="bannerIconSocial">
          <FaLinkedinIn />
        </span>
        <span className="bannerIconSocial">
          <IoMdMail />
        </span>
        <span className="bannerIconSocial">
          <FaInstagram />
        </span>
        <span className="bannerIconSocial">
          <FaStackOverflow />
        </span>
        
      </div>

    </section>
  )
}

export default Home