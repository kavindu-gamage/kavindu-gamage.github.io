import React from 'react'

const ExCard = ({ title, subTitle, des, src }) => {
    return (
        <div className="w-full h-auto group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                    <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                </span>
            </div>
            <div className="w-full  bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
                <div className="flex  lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                    <div className='w-1/8 flex items-center justify-left' >
                        <img
                            className=" w-44 h-100 object-cover group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
                            src={src}
                            alt="src"
                        />
                    </div>
                    <div className="w-7/8 items-center text-justify justify-left ">
                        <h3 className="text-xl md:text-xl font-semibold group-hover:text-designColor  text-designColor  duration-300">
                            {title}
                        </h3>
                        <p className="text-sm mt-1 mb-3 text-gray-200 group-hover:text-gray-100 duration-300">
                            {subTitle}
                        </p>
                        <p className="text-xs md:text-sm  text-gray-500 group-hover:text-gray-400 duration-300">
                            {des}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ExCard