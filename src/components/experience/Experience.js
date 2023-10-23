import React from 'react';
import Left from './Left';
import Right from './Right';

const Experience = () => {
    return (
        <section id="experience" className="w-full h-auto py-5 border-b-[1px] border-b-black">
            <div className='flex justify-center  items-center'>
                <h1 className="text-designColor text-3xl mdl:text-5xl font-bold mdl:py-5">Experience <span className='text-white'>&</span> Volunteering </h1>
            </div>
            <div className='w-full flex flex-col xl:flex-row gap-6 mdl:gap-10 mt-4 mdl:mt-5  justify-start '>
                <div className='w-full xl:w-1/2 mb-36 mdl:mb-0'>
                    <Left />
                </div>
                <div className=' w-full xl:w-1/2  '>
                    <Right />
                </div>
            </div>

        </section>
    );
}

export default Experience