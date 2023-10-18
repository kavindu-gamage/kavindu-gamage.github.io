import React from 'react';
import Left from './Left';
import Right from './Right';

const Experience = () => {
    return (
        <section id="experience" className="w-full h-auto py-10 border-b-[1px] border-b-black">
            <div className='flex justify-center  items-center'>
                <h1 className="text-designColor text-5xl font-bold py-5">Experience <span className='text-white'>&</span> Volunteering </h1>
            </div>
            <div className='w-full flex flex-col xl:flex-row  justify-start '>
                <div className='w-full xl:w-1/2'>
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