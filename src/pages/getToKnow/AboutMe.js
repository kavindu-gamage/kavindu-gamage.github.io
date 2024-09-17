import React from "react";
import { profilePhoto3 } from '../../assests';
import { PageTitle } from "../../components/PageTitle/PageTitle";
const AboutMe = () => {
  return (
    <section id='about' className='w-full h-auto py-3 border-b-[1px]  border-b-black'>
  <div className="flex flex-col text-white pt-10">
    <PageTitle text1="Get To Know" text2="About Me" />
  </div>
  <div className="w-full flex flex-col md:flex-row  gap-8 ">
        <div className="w-full lgl:w-2/5 flex flex-col lgl:flex-row justify-center items-center ">
          <img
            src={profilePhoto3}
            alt="Profile"
            className="w-65 h-65 rounded-lg"
          />
        </div>
        <div className="w-full lgl:w-3/5 flex flex-col lgl:flex-row justify-center items-center">
          {/* <p className="text-sm mdl:text-lg font-bodyFont leading-7  tracking-wide text-justify">
            A fast learner and hardworking individual who strives for perfection
            in every endeavor. I thrive on learning new things and love to
            inspire and collaborate within a team environment to achieve
            excellence.
          </p> */}
          <div className="w-[436.48px] h-[359.04px] pl-[16.19px] pr-[109.82px] pt-[24.64px] pb-[189.38px] bg-black/20 rounded-[14.08px] shadow justify-start items-center inline-flex">
    <div className="w-[310.46px] h-[145.02px] relative flex-col justify-start items-start flex">
        <div className="text-white text-[9.15px] font-extralight font-['Inter']">2022 - Present</div>
        <div className="text-[#0097b2] text-sm font-bold font-['Inter']">Academic Degree</div>
        <div className="w-[285.82px] h-[43.65px] text-white text-sm font-normal font-['Inter']">Lorem ipsum dolor sit amet quo ei simul<br/>congue exerci ad nec admodum perfecto.</div>
        <div className="w-[310.46px] h-[145.02px] relative">
            <div className="left-[24.64px] top-0 absolute text-white text-[9.15px] font-extralight font-['Inter']">2022 - Present</div>
            <div className="left-[24.64px] top-[17.60px] absolute text-[#0097b2] text-sm font-bold font-['Inter']">Academic Degree</div>
            <div className="w-[285.82px] h-[43.65px] left-[24.64px] top-[45.76px] absolute text-white text-sm font-normal font-['Inter']">Lorem ipsum dolor sit amet quo ei simul<br/>congue exerci ad nec admodum perfecto.</div>
            <div className="w-[310.46px] h-[145.02px] left-[0.70px] top-[101.38px] absolute">
                <div className="left-[24.64px] top-0 absolute text-white text-[9.15px] font-extralight font-['Inter']">2022 - Present</div>
                <div className="left-[24.64px] top-[17.60px] absolute text-[#0097b2] text-sm font-bold font-['Inter']">Academic Degree</div>
                <div className="w-[285.82px] h-[43.65px] left-[24.64px] top-[45.76px] absolute text-white text-sm font-normal font-['Inter']">Lorem ipsum dolor sit amet quo ei simul<br/>congue exerci ad nec admodum perfecto.</div>
            </div>
        </div>
    </div>
</div>
        </div>
      </div>
        
    </section>
    );
};

export default AboutMe;
