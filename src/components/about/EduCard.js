import React from 'react'

const EduCard = ({title, subtitle, logo, duration,gpa}) => {
  return (
    <div className=" w-full mdl:w-10/12 lgl:w-full xl:w-10/12 h-auto bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg shadow-shadowOne hover:-translate-y-1 px-3.5 mdl:px-6 mb-6  ">
    <div className="flex flex-col mdl:flex-row  justify-between  py-4">
        <div className='w-1/8 flex items-center justify-center '>
            <img className=" w-12 h-100 mdl:w-16 mdl:h-100 object-cover group-hover:scale-110 duration-300  cursor-pointer"
                src={logo}
                alt="logo" />
        </div>
        <div className=' w-full mdl:w-3/5 mt-2 mdl:mt-0 items-center mdl:justify-left'>
            <h3 className=" text-base mdl:text-lg leading-1  mdl:lead-0 text-designColor lgl:text-xl font-semibold tracking-wide">
                {title}
            </h3>
            <p className=' text-sm mdl:text-base'>{subtitle}</p>
            <p className='text-xxs mdl:text-sm text-gray-400'>{gpa}</p>
        </div>
        <div className='w-1/8  justify-right'>
            <h2 className=' text-xxs mdl:text-base text-gray-500'>{duration}</h2>
        </div>
    </div>
</div>
  )
}

export default EduCard