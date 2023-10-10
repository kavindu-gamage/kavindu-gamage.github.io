import React from 'react';
import { Rota, Watermark } from '../../assests';
import ExCard from './ExCard';

const Experience = () => {
    return (
        <section id="experience" className="w-full py-10 border-b-[1px] border-b-black">
            <div className='flex justify-center  items-center'>
                <h1 className="text-designColor text-5xl font-bold py-5">Experience <span className='text-white'>&</span> Volunteering </h1>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Volunteering Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                <ExCard
                    title="Local Committee Vice President iGV"
                    subTitle="AIESEC in University of Moratuwa"
                    des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    src={Watermark}
                />
                <ExCard
                    title="Team Leader - Project SwitchOff"
                    subTitle="AIESEC in University of Moratuwa"
                    des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    src={Watermark}
                />
                <ExCard
                    title="Customer Experience Specialist"
                    subTitle="AIESEC in University of Moratuwa"
                    des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    src={Watermark}
                />
                <ExCard
                    title="OC Member - Project Hand in Hand"
                    subTitle="Rotaract Club University of Moratuwa"
                    des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
                    src={Rota}
                />
            </div>
        </section>
    );
}

export default Experience