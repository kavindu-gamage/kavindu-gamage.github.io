import React from "react";

const Services = () => {
  return (
    <div className=" text-white py-16 px-4">
      <div className="flex flex-col text-left mb-12">
        <div className="flex items-center space-x-4">
          <div className="w-[15.13px] h-[1.89px] bg-[#d9d9d9]"></div>
          <h2 className="text-designColor text-xs font-medium font-['Inter'] uppercase leading-snug tracking-[7.09px]">
            Services
          </h2>
        </div>
        <h1 className="text-3xl font-semibold font-['Inter'] mt-2">
          Specialized In
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* UI/UX Design Card */}
        <div className="p-8 rounded-lg shadow-lg flex flex-col items-center border border-borderColor">
          <div className="bg-white p-4 rounded-lg mb-4">
            {/* Replace with your icon */}
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/crown.png"
              alt="UI/UX Icon"
            />
          </div>
          <h3 className="text-xl font-thin mb-2 text-designColor">
            UI/UX Design
          </h3>
          <p className="text-center text-white">
            Turn what you have in mind of a digital product into reality. For
            any platform you consider.
          </p>
        </div>

        {/* Application Development Card */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center">
          <div className="bg-gray-700 p-4 rounded-full mb-4">
            {/* Replace with your icon */}
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/layers.png"
              alt="App Dev Icon"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-designColor">
            Application Development
          </h3>
          <p className="text-center text-gray-400">
            Standard designing, building, and implementing your applications
            with documentation.
          </p>
        </div>

        {/* Web Development Card */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center">
          <div className="bg-gray-700 p-4 rounded-full mb-4">
            {/* Replace with your icon */}
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/internet.png"
              alt="Web Dev Icon"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-designColor">
            Web Development
          </h3>
          <p className="text-center text-gray-400">
            Create and maintain your websites and also take care of its
            performance and traffic capacity.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
