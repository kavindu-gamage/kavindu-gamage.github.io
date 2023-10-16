import React from 'react'
import { Watermark, tMac } from '../../assests'
import EduCard from './EduCard'

const Achievements = () => {
  return (
    <div>
      <EduCard 
                title="Nominee for the Best Young Leader"
                subtitle="AIESEC in University of Moratuwa"
                logo={Watermark}
                duration="2021"
                gpa="CS Eminence 2020"
            />
      <EduCard 
                title="Best Customer Experience Specialist"
                subtitle="AIESEC in University of Moratuwa"
                logo={Watermark}
                duration="2021"
                gpa="CS Eminence 2020"
            />
      <EduCard 
                title="Champions of the iOS AR App development"
                subtitle="Organized by ThunderMac"
                logo={tMac}
                duration="2022"
                
            />
            
    </div>
  )
}

export default Achievements