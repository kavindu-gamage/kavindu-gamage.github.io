import React from "react";

export const PageTitle = ({text1, text2}) => {
  return(
    <div className="flex flex-col text-left mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-[15.13px] h-[1.89px] bg-borderColor"></div>
          <h2 className="text-designColor text-s font-medium font-['Inter'] uppercase leading-snug tracking-[7.09px]">
            {text1}
          </h2>
        </div>
        <h1 className="text-4xl font-semibold font-['Inter'] mt-2">
          {text2}
        </h1>
      </div>
  );
};
