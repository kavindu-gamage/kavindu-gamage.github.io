import React from 'react';
import { FaDownload, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { profilePhoto } from '../../assests';

const Contact = () => {
    return (
        <section id="contact" className="w-full h-auto py-10 border-b-[1px] border-b-black">

            <div className='flex justify-center  items-center'>
                <h1 className="text-designColor text-5xl font-bold py-5">Contact <span className='text-white'>Me</span> </h1>
            </div>
            <div className='w-full flex lgl:flex-row flex-col  justify-center items-center relative  gap-5'>
                <div className=' w-full lgl:w-2/5 flex flex-col gap-20 lgl:mb-0 mb-10 justify-center items-center  lgl:items-left'>
                    <img
                        className="w-[400px] h-[500px]  z-10 justify-center items-center"
                        src={profilePhoto}
                        alt="bannerImg"
                    />
                    <div className=" w-[400px] h-[500px] absolute  bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>

                </div>
                <div className='w-full lgl:w-1/2  flex flex-col '>
                    <div className="flex flex-col gap-4 leading-10">
                        <h2 className=" font-bold text-2xl font-titleFont ">You can reach out to me through the contact options listed below. I will try to get back to you as fast as I can.</h2>
                        <p className="text-base text-gray-400 flex gap-2">
                            Phone: <span className="text-lightText">+94 76 335 6566</span>
                        </p>
                        <p className="text-base text-gray-400 flex items-center gap-2">
                            Email: <span className="text-lightText">kavindu.gamage22@gmail.com</span>
                        </p>
                    </div>
                    <div className="flex flex-col  mt-4 gap-4">

                        <div className="flex gap-4">
                            <a href='https://www.linkedin.com/in/kavindu-gamage-' target="_blank" rel='noopener noreferrer'>
                                <span className="contactIcon">
                                    <FaLinkedinIn />
                                </span>
                            </a>
                            <a href='https://github.com/kavindu-gamage' target="_blank" rel='noopener noreferrer'>
                                <span className="contactIcon">
                                    <FaGithub />
                                </span>
                            </a>
                            <a href='mailto:kavindu.gamage22@gmail.com' target="_blank" rel='noopener noreferrer'>
                                <span className="contactIcon">
                                    <IoMdMail />
                                </span>
                            </a>
                            <a href='https://www.facebook.com/kavindu.gamage23' target="_blank" rel='noopener noreferrer'>
                                <span className="contactIcon">
                                    <FaFacebookF />
                                </span>
                            </a>
                            <a href='https://www.instagram.com/kavinduu_98/' target="_blank" rel='noopener noreferrer'>
                                <span className="contactIcon">
                                    <FaInstagram />
                                </span>
                            </a>

                        </div>
                    </div>
                    <div className='flex flex-row mt-10 gap-4 items-center'>
                        <h3>Download CV</h3>
                        <a href='https://drive.google.com/file/d/13JcZpvAg1M_8g_9P3SFoaGQbsYelK88-/view?usp=sharing' target="_blank" rel='noopener noreferrer'>
                                <span className="contactIcon">
                                <FaDownload/>
                                </span>
                            </a>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact