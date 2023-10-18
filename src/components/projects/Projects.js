import React from 'react'
import { FaCss3Alt, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiMongodb, SiSpringboot } from 'react-icons/si'
import { projectsC1, projectsC2, projectsC3 } from '../../assests'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section id='projects' className="w-full py-10  border-b-[1px] border-b-black">
            <div className='flex justify-center  items-center'>
                <h1 className="text-designColor text-5xl font-bold py-5">My <span className='text-white'>Projects</span> </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 gap-10 xl:gap-14'>
                <ProjectCard
                    title="Hotel Reservation System"
                    des='An online hotel reservation system with a user-friendly interface, admin dashboard, role-based access control, and room filtering capabilities.'
                    src={projectsC1}
                    icons={[SiSpringboot, FaReact, GrMysql, FaFigma]}
                />
                <ProjectCard
                    title="E-Commerce Web Application"
                    des='A user-friendly E-Commerce web application with essential features like user profiles,
                    shopping carts, payment methods, and exploring products.'
                    src={projectsC2}
                    icons={[FaNodeJs, FaReact, SiMongodb]}
                />
                <ProjectCard
                    title="Burger Shop Website"
                    des='A responsive one-page website for a burger shop, featuring sections for Home, About, Menu, Offers, and Locations, providing customers with an enticing online experience'
                    src={projectsC3}
                    icons={[FaHtml5 ,FaCss3Alt, FaJs]}
                />
            </div>

        </section>
    )
}

export default Projects