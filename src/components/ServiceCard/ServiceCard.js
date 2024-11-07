import React, { useEffect, useState } from 'react';

export const ServiceCard = ({ url, urlText, title, body }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Automatically flip the card every 2 seconds
  useEffect(() => {
    const flipInterval = setInterval(() => {
      if (!hovered) { // Only flip automatically if not hovered
        setIsFlipped((prev) => !prev);
      }
    }, 3000); // 3 seconds interval

    // Clear interval on component unmount
    return () => clearInterval(flipInterval);
  }, [hovered]);

  return (
    <div
      className="flip-card w-[300px] h-[200px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flip-card-inner transform transition-transform duration-700 relative w-full h-full ${
          isFlipped || hovered ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="flip-card-front p-3 lgl:p-8 rounded-lg shadow-lg flex flex-col items-center justify-center border border-borderColor absolute w-full h-full backface-hidden">
          <div className="bg-white p-3 rounded-xl m-4">
            <img src={url} alt={urlText} className="w-8 h-8" />
          </div>
          <h3 className="text-base font-['Plus Jakarta Sans'] font-medium text-designColor">
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