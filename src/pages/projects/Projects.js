import React, { useEffect, useState } from "react";
import { projectsC1, projectsC2, projectsC3, projectsC4 } from "../../assests";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    
  // return (
  //     <section id='projects' className="w-full  py-5  border-b-[1px] border-b-black">
  //         <div className='flex flex-col items-center text-white py-10'>
  //         <PageTitle text1="My Works" text2="Featured Products" />
  //         </div>
  //         <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 mdl:mt-8 gap-10 xl:gap-14'>
  //             <ProjectCard
  //                 title="Hotel Reservation System"
  //                 des='An online hotel reservation system with a user-friendly interface, admin dashboard, role-based access control, and room filtering capabilities.'
  //                 src={projectsC1}
  //                 techStack = {["Spring Boot", "React.js", "MySQL", "Figma"]}
  //                 link="https://github.com/kavindu-gamage/Hotel-Reservation-System"
  //             />
  //             <ProjectCard
  //                 title="E-Commerce Web Application"
  //                 des='A user-friendly E-Commerce web application with essential features like user profiles,
  //                 shopping carts, payment methods, and exploring products.'
  //                 src={projectsC2}
  //                 techStack = {["Express.js", "Node.js", "React.js", "MongoDb"]}
  //                 // icons={[FaNodeJs, FaReact, SiMongodb]}
  //                 link="https://github.com/kavindu-gamage/e-commerce-web-back-end"
  //             />
  //             <ProjectCard
  //                 title="Burger Shop Website"
  //                 des='A responsive one-page website for a burger shop, featuring sections for Home, About, Menu, Offers, and Locations, providing customers with an enticing online experience'
  //                 src={projectsC3}
  //                 techStack = {["HTML", "CSS", "Java Script"]}
  //                 // icons={[FaHtml5 ,FaCss3Alt, FaJs]}
  //                 link="https://github.com/kavindu-gamage/burgerShop-landingPage"
  //             />
  //         </div>

  //     </section>
  // )
  const projects = [
    {
      title: "Hotel Reservation System",
      des: "An online hotel reservation system with a user-friendly interface, admin dashboard, role-based access control, and room filtering capabilities.",
      src: projectsC1,
      techStack: ["Spring Boot", "React.js", "MySQL"],
      link: "https://github.com/kavindu-gamage/Hotel-Reservation-System",
    },
    {
      title: "Burger Shop Website",
      des: "A responsive one-page website for a burger shop, featuring sections for Home, About, Menu, Offers, and Locations, providing customers with an enticing online experience",
      src: projectsC3,
      techStack: ["HTML", "CSS", "Java Script"],
      link: "https://github.com/kavindu-gamage/burgerShop-landingPage",
    },
    {
      title: "E-Commerce Web Application",
      des: "A user-friendly E-Commerce web application with essential features like user profiles, shopping carts, payment methods, and exploring products.",
      src: projectsC2,
      techStack: ["Express.js", "Node.js", "React.js", "MongoDB"],
      link: "https://github.com/kavindu-gamage/e-commerce-web-back-end",
    },
    {
        title: "Job Portal System",
        des: "A job portal for seekers to search, apply, and track applications. Companies can post jobs, manage profiles, and monitor applications. Seekers get alerts and career tips.",
        src: projectsC4,
        techStack: ["Express.js", "Node.js", "React.js", "MongoDB"],
        link: "https://github.com/kavindu-gamage/FindVerve-FrontEnd",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCarouselMode, setIsCarouselMode] = useState(window.innerWidth >= 1024);
  const startIndicatorIndex = currentIndex < projects.length - 1 
  ? Math.max(0, currentIndex - 1) 
  : currentIndex - 2;

  useEffect(() => {
    const handleResize = () => {
      setIsCarouselMode(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isCarouselMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isCarouselMode, projects.length]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    // Calculate indices for 3 visible projects
    const visibleProjects = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visibleProjects.push(projects[index]);
    }
    return visibleProjects;
  };

  return (
    <section id="projects" className="w-full py-5 border-b-[1px] border-b-black">
      <div className="flex flex-col items-center text-white py-10">
        <PageTitle text1="My Works" text2="Featured Projects" />
      </div>

      {isCarouselMode ? (
        // Carousel View for larger screens
        <div className="relative flex flex-col items-center">
          <div className="flex space-x-4 w-full max-w-6xl justify-center items-center">
            {getVisibleProjects().map((project, index) => (
              <div
                key={index}
                className={`transition-transform duration-500 ${index === 1 ? "transform scale-110 z-10 shadow-lg" : "opacity-80 scale-95"} w-1/3`}
              >
                <ProjectCard
                  title={project.title}
                  des={project.des}
                  src={project.src}
                  techStack={project.techStack}
                  link={project.link}
                />
              </div>
            ))}
          </div>

          {/* Indicator Rectangles and Navigation Arrows */}
          <div className="flex items-center mt-6 space-x-2">
            {/* Left Arrow */}
            <button
              onClick={handlePrevClick}
              className="text-white p-2 rounded-sm flex items-center justify-center hover:bg-gray-700 transition duration-300"
            >
              <span>{"<"}</span>
            </button>

            {/* Indicator Rectangles */}
<div className="flex space-x-6">
  {projects.slice(startIndicatorIndex, startIndicatorIndex + 3).map((_, index) => (
    <div
      key={index}
      className={`w-8 h-2 rounded-md ${
        (startIndicatorIndex + index) === currentIndex ? "bg-designColor" : "bg-buttonColor"
      }`}
    ></div>
  ))}
</div>

            {/* Right Arrow */}
            <button
              onClick={handleNextClick}
              className="text-white p-2 rounded-sm flex items-center justify-center hover:bg-gray-700 transition duration-300"
            >
              <span>{">"}</span>
            </button>
          </div>
        </div>
      ) : (
        // Grid View for smaller screens
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14 mt-4 mdl:mt-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <ProjectCard
                title={project.title}
                des={project.des}
                src={project.src}
                techStack={project.techStack}
                link={project.link}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
