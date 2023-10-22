import React from 'react';
import Fade from 'react-reveal/Fade';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { homeCover } from '../../assests/index';
const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });

  return (
    <section id='home' className='w-full lgl:w-full h-auto xl:h-[700px] pt-28  flex flex-col lgl:flex-row  border-b-[1px] font-titleFont border-b-black'>
      <div className='w-full lgl:w-3/5 flex flex-col gap-20 '>
        <Fade top cascade duration={800}>
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
            <p className="text-base font-bodyFont leading-7  tracking-wide text-justify">
              As a developer, I transform ideas into seamless digital experiences.
              My code bridges imagination and reality, crafting user-friendly solutions that drive business success.
              I'm passionate about pushing the boundaries of technology to create innovative solutions that leave a lasting impact.
            </p>
          </div>
        </Fade>
        <Fade top cascade duration={700} delay={400}>
        <div className='flex xl:flex-row lgl:flex-row mdl:flex-row flex-col xs:gap-10  gap-16 mb-10 xl:mb-0'  >
          
            <a href="#projects" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white border-2 border-designColor rounded-md hover:bg-designColor sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
              View Projects
              <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#contact" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white border-2 border-designColor rounded-md hover:bg-designColor sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
              Contact Me
            </a>
          

          {/* <Fade top cascade duration={700} delay={400}>
            <div className="flex flex-col gap-0 justify-between" >
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
            </Fade> */}
        </div>
        </Fade>

      </div>
      <div className="w-full lgl:w-2/5 flex flex-col lgl:flex-row justify-center items-center ">
        <Fade cascade duration={2600}>
          <img
            className="w-[480px] h-auto lgl:w-[480px] lgl:h-[auto]  lgl:ml-20 lgl:mt-[-200px]  "
            src={homeCover}
            alt="bannerImg"
          />
        </Fade>

        {/* <div className="absolute bottom-70 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
      </div>
      {/* <div className="flex flex-row lgl:flex-col justify-between lgl:justify-normal mb-10 lgl:gap-8 lgl:mt-15">
        <Fade top cascade duration={1600} delay={350}>
          <a href='https://github.com/kavindu-gamage' target="_blank" rel='noopener noreferrer'>
            <span className="bannerIconSocial">
              <FaGithub />
            </span>
          </a>

          <a href='https://www.linkedin.com/in/kavindu-gamage-' target="_blank" rel='noopener noreferrer' >
            <span className="bannerIconSocial">
              <FaLinkedinIn />
            </span>
          </a>
          <a href='mailto:kavindu.gamage22@gmail.com' target="_blank" rel='noopener noreferrer'>
            <span className="bannerIconSocial">
              <IoMdMail />
            </span>
          </a>
          <a href='https://www.instagram.com/kavinduu_98/' target="_blank" rel='noopener noreferrer'>
            <span className="bannerIconSocial">
              <FaInstagram />
            </span>
          </a>

          <a href='https://stackoverflow.com/users/22234315/kavindu-gamage?tab=profile' target="_blank" rel='noopener noreferrer'>
            <span className="bannerIconSocial">
              <FaStackOverflow />
            </span>
          </a>
        </Fade>



      </div> */}

    </section>
  )
}

export default Home