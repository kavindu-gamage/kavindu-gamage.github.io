import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { avatar1, pLogo } from "../../assests";


const ConnectWithMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/google-sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setSent(true);
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
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
      <div className="flex flex-col lg:flex-row ">
        <div className="flex flex-col w-full mdl:w-4/7 items-center lg:items-start">
          <form onSubmit={sendEmail} className="w-full max-w-xl p-6 rounded-md">
            <div className="mb-4 flex flex-row gap-4">
              <input
                className="w-full p-2 border border-designColor rounded-md focus:outline-none focus:border-borderColor text-white bg-transparent"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
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
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="p-1.5 bg-borderColor hover:borderColor text-black rounded-md items-center justify-end"
              disabled={sent}
            >
              {sent ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
        <div className="flex flex-col w-full mdl:w-3/7 items-center lg:items-start">
          <img
            src={pLogo}
            alt="PortfolioLogo"
            className="w-[150px] h-auto ml-[-16px]"
          />
          <h3 className="text-white text-2xl font-bold mb-4 tracking-widest">
            Kavindu <span className="text-designColor">Gamage</span>
          </h3>
          <p className="text-white mb-2 tracking-wider">
            Phone: +94 76 335 6566
          </p>
          <p className="text-white mb-6 tracking-wider">
            Email: kavindu.gamage22@gmail.com
          </p>

          <div className="flex flex-col mt-1  mdl:mt-4 gap-4">
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kavindu-gamage-"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contactIcon">
                  <FaLinkedinIn />
                </span>
              </a>
              <a
                href="https://github.com/kavindu-gamage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contactIcon">
                  <FaGithub />
                </span>
              </a>
              <a
                href="mailto:kavindu.gamage22@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contactIcon">
                  <IoMdMail />
                </span>
              </a>
              <a
                href="https://www.instagram.com/kavinduu_98/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
