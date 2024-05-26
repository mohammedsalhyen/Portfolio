"use client"
import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProjectCard from '../helper/ProjectCard';
import { fetchProject } from '@/utils/project';
import { motion } from 'framer-motion';
import { fadeIn, footerVariants, navVariants } from '@/utils/motion';
const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const projectData = await fetchProject();
            setProjects(projectData);
        };
        fetchData();
    }, []);
    return (
        <div className='main-props text-center overflow-hidden' id='Project' >
            <div className='section-header my-10 flex-center gap-2'>
                <motion.p variants={navVariants} initial="hidden" whileInView="show">My Latest</motion.p>
                <motion.span variants={fadeIn("left", "spring", 0.5, 1)} initial="hidden" whileInView="show">Projects</motion.span>
            </div>
            <div className='max-container mx-auto padding-container overflow-hidden'>
                {projects?.map((project: any, index: number) => (
                    <ProjectCard project={project} key={index} index={index} />
                ))}
            </div>
            <motion.div variants={footerVariants} initial="hidden" whileInView="show" className='py-10 flex justify-center items-center '>
                <a href="https://github.com/mohammedsalhyen"
                    className='bg-[var(--pimary)] flex justify-center items-center font-[500] w-56 h-16 text-xl rounded-lg border-2 border-[var(--border)] transition-all hover:border-[var(--icon-theme-color-hover)]'
                >
                    See More
                    <MdKeyboardDoubleArrowRight className='project-icon-arrow' />
                </a>
            </motion.div>
        </div>
    );
};

export default Project;
