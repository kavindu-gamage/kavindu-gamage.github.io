import React from 'react'
import { Rota, Watermark } from '../../assests'
import ExCard from './ExCard'

const Right = () => {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">Volunteering Experience</h2>
            </div>
            <div className="mt-6 lgl:mt-14 w-11/12 h-[750px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                <ExCard
                    title="Local Committee Vice President iGV"
                    subTitle="AIESEC in University of Moratuwa"
                    des="Delivered 5 volunteering projects based on UN Sustainable Development Goals while managing a team of 120+ undergraduates and 15+ foreign volunteers."
                    src={Watermark}
                />
                <ExCard
                    title="Team Leader - Project SwitchOff"
                    subTitle="AIESEC in University of Moratuwa"
                    des="Planned project activities, managed the project budget, organized events, and collaborated with foreign volunteers to deliver the project."
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
        </div>
    )
}

export default Right