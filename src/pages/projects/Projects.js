import React from 'react'
import { FaCss3Alt, FaFigma, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { SiMongodb, SiSpringboot } from 'react-icons/si'
import { projectsC1, projectsC2, projectsC3 } from '../../assests'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section id='projects' className="w-full  py-5  border-b-[1px] border-b-black">
            <div className='flex flex-col items-center text-white py-10'>
            <PageTitle text1="My Works" text2="Featured Products" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 mdl:mt-8 gap-10 xl:gap-14'>
                <ProjectCard
                    title="Hotel Reservation System"
                    des='An online hotel reservation system with a user-friendly interface, admin dashboard, role-based access control, and room filtering capabilities.'
                    src={projectsC1}
                    icons={[SiSpringboot, FaReact, GrMysql, FaFigma]}
                    link="https://github.com/kavindu-gamage/Hotel-Reservation-System"
                />
                <ProjectCard
                    title="E-Commerce Web Application"
                    des='A user-friendly E-Commerce web application with essential features like user profiles,
                    shopping carts, payment methods, and exploring products.'
                    src={projectsC2}
                    icons={[FaNodeJs, FaReact, SiMongodb]}
                    link="https://github.com/kavindu-gamage/e-commerce-web-back-end"
                />
                <ProjectCard
                    title="Burger Shop Website"
                    des='A responsive one-page website for a burger shop, featuring sections for Home, About, Menu, Offers, and Locations, providing customers with an enticing online experience'
                    src={projectsC3}
                    icons={[FaHtml5 ,FaCss3Alt, FaJs]}
                    link="https://github.com/kavindu-gamage/burgerShop-landingPage"
                />
            </div>

        </section>
    )
}

export default Projects