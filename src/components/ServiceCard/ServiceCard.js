import React from "react";

export const ServiceCard = ({url, urlText, title, body}) => {
  return (
    <div className="p-8 rounded-lg shadow-lg flex flex-col items-center border border-borderColor m-2">
          <div className="bg-white p-3 rounded-xl m-4">
            <img src={url} alt={urlText} className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </div>
          <h3 className="text-xs sm:text-sm md:text-base lg:text-base font-['Plus Jakarta Sans'] font-medium mb-2 text-designColor">
            {title}
          </h3>
          <p className="text-center font-['Inter'] text-white text-xs sm:text-sm md:text-base lg:text-base">
            {body}
          </p>
        </div>

  );
};
