import React from 'react'

const EduCard = ({title, subtitle, logo, duration,gpa}) => {
  return (
    <div className="w-10/12 h-auto bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg shadow-shadowOne hover:-translate-y-1  px-4 mb-6  ">
    <div className="flex  justify-between  py-4">
        <div className='w-1/8 flex items-center justify-center '>
            <img className="w-16 h-100 object-cover group-hover:scale-110 duration-300  cursor-pointer"
                src={logo}
                alt="logo" />
        </div>
        <div className='w-3/5  items-center justify-left'>
            <h3 className="text-lg text-designColor lgl:text-2xl font-semibold tracking-wide">
                {title}
            </h3>
            <p className='text-base'>{subtitle}</p>
            <p className='text-sm text-gray-400'>{gpa}</p>
        </div>
        <div className='w-1/8  justify-right'>
            <h2 className='text-base'>{duration}</h2>
        </div>
    </div>
</div>
  )
}

export default EduCard