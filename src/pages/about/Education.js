import React from 'react'
import { ijse, scl, uni } from '../../assests'
import EduCard from './EduCard'

const Education = () => {
    return (
        <div>
            <EduCard 
                title="University of Moratuwa"
                subtitle="Bachelor of the Science of Engineering Honours"
                logo={uni}
                duration="2018-2023"
                gpa="Second Class Division"
            />
            <EduCard 
                title="Institute of Software Engineering"
                subtitle="Diploma in Software Engineering"
                logo={ijse}
                duration="2022-2023"
            />
             <EduCard 
                title="Walasmulla National School"
                subtitle="GCE Advanced Level Examination"
                logo={scl}
                duration="2015-2017"
                gpa= "Combined Maths-A Physics-A Chemistry-A"
            />
            <EduCard 
                title="Walasmulla National School"
                subtitle="GCE Ordinary Level Examination"
                logo={scl}
                duration="2004-2014"
                gpa = "7A, 2B Passes"
            />

        </div>
        
        
        // <div >
        //     <div className="w-4/5 h-1/4 py-2 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne px-4  ">
        //         <div className="flex flex-col-3 justify-between  py-4">
        //             <div className='w-1/8 items-center justify-center'>
        //                 <img className="w-20 h-100 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        //                     src={ijse}
        //                     alt="ijse" />
        //             </div>
        //             <div className='w-3/5 items-center justify-left'>
        //                 <h3 className="text-xl text-designColor lgl:text-2xl font-medium tracking-wide">
        //                     Institute of Software Engineering
        //                 </h3>
        //                 <p>Diploma in Software Engineering</p>
        //             </div>
        //             <div className='w-1/8 items-center justify-right'>
        //                 <h2>2022-2023</h2>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-4/5 h-1/4 py-2 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne px-4 lgl:p-8  justify-center gap-4 lgl:gap-8 ">
        //         <div className="flex flex-col-3 justify-between  py-4">
        //             <div className='w-1/8 items-center justify-left'>
        //                 <img className="w-20 h-100 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        //                     src={uni}
        //                     alt="uni" />
        //             </div>
        //             <div className='w-3/5 items-center justify-left'>
        //                 <h3 className="text-xl text-designColor lgl:text-2xl font-medium tracking-wide">
        //                     University of Moratuwa
        //                 </h3>
        //                 <p>Bachelor of the Science of Engineering Honours</p>
        //                 <p>GPA 3.1</p>
        //             </div>
        //             <div className='w-1/8 items-center justify-right'>
        //                 <h2>2018-2023</h2>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="w-4/5 h-1/4 py-2 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne px-4 lgl:p-8  justify-center gap-4 lgl:gap-8">
        //         <div className="flex flex-col-3 justify-between  py-4">
        //             <div className='w-1/8 items-center justify-left'>
        //                 <img className="w-20 h-100 object-cover group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
        //                     src={scl}
        //                     alt="scl1" />
        //             </div>
        //             <div className='w-3/5 items-center justify-left'>
        //                 <h3 className="text-xl text-designColor lgl:text-2xl font-medium tracking-wide">
        //                     Walasmulla National School
        //                 </h3>
        //                 <p>GCE Adnaced Level Examination</p>
        //                 <p>Combined Maths-A Physics-A Chemistry-A </p>
        //             </div>
        //             <div className='w-1/8 items-center justify-right'>
        //                 <h2>2015-2017</h2>
        //             </div>
        //         </div>
        //     </div>
        //     {/* <div className="w-4/5 h-1/4 py-2 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne px-4 lgl:p-8  justify-center gap-4 lgl:gap-8">
        //         <div className="flex flex-col-3 justify-between  py-4">
        //             <div className='w-1/8 items-center justify-left'>
        //                 <img className="w-20 h-100 object-cover group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
        //                     src={scl}
        //                     alt="scl2" />
        //             </div>
        //             <div className='w-3/5 items-center justify-left'>
        //                 <h3 className="text-xl text-designColor lgl:text-2xl font-medium tracking-wide">
        //                     Walasmulla National School
        //                 </h3>
        //                 <p>GCE Ordinary Level Examination</p>
        //                 <p>7A, 2B Passes </p>
        //             </div>
        //             <div className='w-1/8 items-center justify-right'>
        //                 <h2>2004-2014</h2>
        //             </div>
        //         </div>
        //     </div> */}
        // </div>
        


    )
}

export default Education