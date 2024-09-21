import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { avatar1, pLogo } from "../../assests";

const ConnectWithMe = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your own values from EmailJS
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //   .then((result) => {
    //     console.log(result.text);
    //     setSent(true); // Show confirmation
    //   }, (error) => {
    //     console.log(error.text);
    //   });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section
      id="connectWithMe"
      className="w-full h-auto py-3 border-b-[1px]  border-b-black"
    >
      <div className="flex flex-col text-white text-[34px] font-semibold font-['Inter'] leading-[40.80px] items-center my-7">
        Connect with me
      </div>
      <div className="flex flex-col items-center">
        <img
          src={avatar1}
          alt="avatar1"
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-24 md:h-24"
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full mdl:w-1/2">
        <form onSubmit={sendEmail} className="w-full max-w-lg p-6 rounded-md shadow-lg">
          <div className="mb-4">
            <input
              className="w-full p-2 border border-designColor rounded-md focus:outline-none focus:border-borderColor text-white bg-transparent"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full p-2 border border-designColor rounded-md focus:outline-none focus:border-borderColor text-white bg-transparent"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-2 border border-designColor rounded-md focus:outline-none focus:border-borderColor text-white bg-transparent"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="flex flex-col w-1/3 p-1 bg-borderColor hover:borderColor text-black rounded-md transition duration-200 items-center justify-end"
          >
            Send Message
          </button>
        </form>
        </div>
        <div className="flex flex-col w-full mdl:w-1/2">
          <img
          src={pLogo}
          alt="PortfolioLogo"
          className="w-[150px] h-auto ml-[-16px]"
          />
          <h3 className="text-white text-2xl font-bold mb-4">
            Kavindu <span className="text-designColor">Gamage</span>
          </h3>
          <p className="text-white mb-2">Phone: +94 76 335 6566</p>
          <p className="text-white mb-6">Email: kavindu.gamage22@gmail.com</p>

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
                            <a href='https://www.instagram.com/kavinduu_98/' target="_blank" rel='noopener noreferrer'>
                                <span className="contactIcon">
                                    <FaInstagram />
                                </span>
                            </a>

                        </div>
                    </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithMe;
