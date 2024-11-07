import React from "react";

export const ServiceCard = ({ url, urlText, title, body }) => {
  return (
    // <div className="p-8 rounded-lg shadow-lg flex flex-col items-center border border-borderColor m-2">
    //       <div className="bg-white p-3 rounded-xl m-4">
    //         <img src={url} alt={urlText} className="w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8" />
    //       </div>
    //       <h3 className="text-xs sm:text-sm md:text-base lg:text-base font-['Plus Jakarta Sans'] font-medium mb-2 text-designColor">
    //         {title}
    //       </h3>
    //       <p className="text-center font-['Inter'] text-white text-xs sm:text-sm md:text-base lg:text-base">
    //         {body}
    //       </p>
    //     </div>
    <div className="flip-card w-[300px] h-[200px]">
  <div className="flip-card-inner transform transition-transform duration-700 relative w-full h-full">
    
    {/* Front Side */}
    <div className="flip-card-front p-3 lgl:p-8 rounded-lg shadow-lg flex flex-col items-center justify-center border border-borderColor absolute w-full h-full backface-hidden">
      <div className="bg-white p-3 rounded-xl m-4">
        <img src={url} alt={urlText} className="w-8 h-8" />
      </div>
      <h3 className="text-base font-['Plus Jakarta Sans'] font-medium text-designColor ">
        {title}
      </h3>
    </div>
    
    {/* Back Side */}
    <div className="flip-card-back p-8 rounded-lg shadow-lg flex flex-col items-center justify-center border border-borderColor absolute w-full h-full transform rotate-y-180 backface-hidden">
      <h3 className="text-base font-['Plus Jakarta Sans'] font-medium text-designColor mb-3">
        {title}
      </h3>
      <p className="text-center font-['Inter'] text-white text-xs lgl:text-sm">
        {body}
      </p>
    </div>

  </div>
</div>

  );
};
