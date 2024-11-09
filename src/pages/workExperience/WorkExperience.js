import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi"; // Import an arrow icon
import { PageTitle } from "../../components/PageTitle/PageTitle";

const WorkExperience = () => {
  // State to track the selected company
  const [selectedCompany, setSelectedCompany] = useState("IFS");

  // Company experience data
  const experienceData = {
    IFS: {
      title: "Software Engineer",
      company: "IFS",
      location: "Colombo, Sri Lanka",
      period: "Aug 2024 - Present · Full-time",
      techStack: ["Java", "PL/SQL"],
      description: [
        "Currently working on the Service Management team, developing features related to service handling in IFS Cloud.",
      ],
    },
    CentralFinance: {
      title: "Software Engineer",
      company: "Central Finance",
      location: "Colombo, Sri Lanka",
      period: "May 2024 - Aug 20204 · Full-time",
      techStack: ["Java", "Spring Boot", "MySQL", "AWS"],
      description: [
        "Worked on the backend development of the Central Finance TapT App, focused on recording daily employee attendance at Central Finance.",
        "Led the backend development, utilizing layered architecture principles.",
        "Implemented JWT authentication by integrating Active Directory (AD) login into the app.",
        "Designed the Employee Information Module for Central Finance's Human Resources web application, identifying relationships between components.",
        "Developed the backend code for the Employee Information Module in the HR web application.",
        "Used AWS CodeCommit for seamless version control during development.",
        "Employed MySQL as the primary database, writing queries for data retrieval."
      ],
    },
    Virtusa: {
      title: "Software Engineer Intern",
      company: "Virtusa",
      location: "Colombo, Sri Lanka",
      period: "Oct 2023 - Apr 2024 · Full-time",
      techStack: ["GoLang", "Springboot", "GCP"],
      description: [
        "Worked on a client (Iron Mountain) project called IRM records and information management.",
        "Retrieved records data from the Google Cloud and Developed API endpoints for warehouse applications using Java and GoLang.",
        "Implemented unit test cases for developed API endpoints and managed version control using GitLab.",
        "Completed AWS Cloud Practitioner Essentials training and obtained certification.",
        "Participated in various training sessions conducted by the Virtusa Learning Team, covering React.js, Spring Boot, REST API, Microservices with Spring Cloud, Java8, Junit & Mockito, Spring Core, and Hibernate.",

      ],
    },
    AIESEC: {
      title: "Country Director - Incoming Exchanges",
      company: "AIESEC",
      location: "Tirana, Albania",
      period: "Aug 2022 - Jul 2023 · Part-Time",
      techStack: ["Team Management", "Partnership Development"],
      description: [
        "Coordinated with companies in Tirana to build partnerships to provide internship and volunteer opportunities for international students while managing a 10-member team.",
        "Engaged in data analytics, insight generation, and maintained dashboards to monitor and tracked the process.",
      ],
    },
  };

  return (
    <section
      id="WorkExperience"
      className="w-full h-auto py-3 border-b-[1px] border-b-black"
    >
      {/* Title Section */}

      {/* Main Grid Layout */}
      <div className="flex flex-col lg:flex-row lg:mt-8 lg:mb-10 mt-2 space-y-6 lg:space-y-0 lg:space-x-12 lg:p-8 p-8">
        {/* Left Sidebar with Company List */}
        <div className="w-full lg:w-1/3">
          <div className="flex flex-col text-white mb-4 lg:mb-8">
            <PageTitle text1="Career Path" text2="Work Experiences" />
          </div>
          <div className="space-y-4">
            {/* Render the company buttons */}
            {Object.keys(experienceData).map((companyKey) => (
              <button
                key={companyKey}
                className={`w-full lg:w-5/6 text-left text-lg py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                  selectedCompany === companyKey
                    ? "border-2 border-designColor text-white"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedCompany(companyKey)}
              >
                {/* Conditional rendering of the arrow icon */}
                {selectedCompany === companyKey && (
                  <FiChevronRight className="text-designColor" />
                )}
                <span>{companyKey}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex w-full lg:w-3/4 items-center ">
          {/* Dynamically Displaying the Selected Company's Experience */}
          <div className="space-y-4">
            <div className="mb-6 ">
              <h2 className="text-2xl font-semibold font-['Inter'] text-white mb-4">
                {experienceData[selectedCompany].title}{" "}
                <span className="text-designColor">
                  {experienceData[selectedCompany].company}
                </span>
              </h2>
              <p className="text-gray-400 font-['Inter']">
                {experienceData[selectedCompany].location} <br />
                {experienceData[selectedCompany].period}
              </p>
              {/* Tags */}
              <div className="flex space-x-2 mt-2 font-['Inter']">
                {experienceData[selectedCompany].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-700 text-white rounded-md "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="border-t-[1px] border-gray-600 mt-6 pt-6">
              <ul className="list-disc pl-5 text-gray-300 font-['Inter'] space-y-2">
                {experienceData[selectedCompany].description.map(
                  (desc, index) => (
                    <li key={index} className="pl-2">
                      {desc}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
