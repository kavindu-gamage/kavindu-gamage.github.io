import React from 'react';

const Skills = ({title, skills}) => {
  const SkillCategory = ({ title, skills }) => (
    <div className="">
      <h2 className='text-md mdl:text-lg font-semibold mb-2 mt-6 text-gray-400  '>{title}</h2>
      <div className='flex flex-wrap mdl:flex-row gap-6'>
        {skills.map((skill, index) => (
          <div className="lanIcon" key={index} >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className='mt-[-30px]'>
    <SkillCategory
      title="Programming Languages"
      skills={['Java', 'JavaScript', 'Python', 'C++']}
    />
    <SkillCategory
      title="Web Development"
      skills={['HTML5', 'CSS3', 'SpringBoot', 'ReactJS', 'NodeJS', 'Figma']}
    />
    <SkillCategory title="Databases" skills={['MySQL', 'MongoDB']} />
    <SkillCategory title="Other" skills={['Git', 'Postman', 'VSCode']} />
  </div>
  )
}

export default Skills