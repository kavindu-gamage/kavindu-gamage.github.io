import React from 'react'
import { Watermark } from '../../assests'
import ExCard from './ExCard'

const Left = () => {
  return (
    <div className='flex flex-col'>
        <div>
        <h2 className="text-3xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-11/12 h-[170px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ExCard
                    title="Country Director Incoming Exchanges "
                    subTitle="AIESEC in Albania"
                    des="Coordinated with companies in Tirana to build partnerships to provide internship and volunteer opportunities for international students while managing a 10-member team."
                    src={Watermark}
                />
        </div>
    </div>
  )
}

export default Left