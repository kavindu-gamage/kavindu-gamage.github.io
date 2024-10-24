import React from "react";

export const TechStack = ({LogoName, text}) => {
  return (
    <div>
        <img src = {LogoName} alt={text} className="w-16 h-16 " />
             <h3 className="text-2xs  font-['Plus Jakarta Sans'] font-medium mb-2 text-designColor">
                {text}
              </h3>

    </div>
      );
};
