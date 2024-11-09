import React from "react";

const ProjectCard = ({ title, des, src, techStack, link }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
            src={src}
            alt="src"
          />
        </a>
      </div>
      <div className="w-full flex flex-col mt-5 xl:mt-6">
        <div>
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-sm text-justify tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
        <div className="flex space-x-2 mt-4 font-['Inter'] text-xs">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 border-[1px] border-designColor text-white rounded-md  "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
