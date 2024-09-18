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
        "Improving overall website performance for mobile users.",
        "Collaborating with back-end developers and web designers to improve usability.",
        "Adding voice search features for mobile app.",
        "Developing an admin panel to manage contents, users, products, and more.",
      ],
    },
    CentralFinance: {
      title: "Software Engineer",
      company: "Central Finance",
      location: "Colombo, Sri Lanka",
      period: "Jan 2019 - Oct 2020 · Full-time",
      techStack: ["Java", "Spring Boot"],
      description: [
        "Developed financial transaction systems for enhanced processing.",
        "Worked on improving database performance.",
        "Collaborated with team members to migrate legacy systems.",
        "Enhanced security features for web applications.",
      ],
    },
    Virtusa: {
      title: "Back-end Developer",
      company: "Virtusa",
      location: "New Jersey, United States",
      period: "Mar 2017 - Dec 2018 · Full-time",
      techStack: ["Node.js", "Express.js"],
      description: [
        "Built and maintained server-side APIs.",
        "Implemented authentication and authorization systems.",
        "Optimized data flows between microservices.",
        "Collaborated with the DevOps team to improve CI/CD pipelines.",
      ],
    },
    AIESEC: {
      title: "Intern Developer",
      company: "AIESEC",
      location: "Toronto, Canada",
      period: "Jul 2016 - Feb 2017 · Internship",
      techStack: ["React.js", "GraphQL"],
      description: [
        "Worked on front-end development for web applications.",
        "Collaborated with designers to create user-friendly interfaces.",
        "Integrated GraphQL APIs for faster data retrieval.",
        "Participated in code reviews and sprint planning.",
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
