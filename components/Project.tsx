
import React, { useEffect, useState } from 'react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProjectCard from '../helper/ProjectCard';
import { fetchProjects } from '@/utils/data';
const Project = async () => {
    const projects = await fetchProjects()
    return (
        <div className='main-props text-center overflow-hidden' id='Project' >
            <div className='section-header my-10 flex-center gap-2'>
                <p>My Latest</p>
                <span>Projects</span>
            </div>
            <div className='max-container mx-auto padding-container overflow-hidden'>
                {projects?.map((project: any, index: number) => (
                    <ProjectCard project={project} key={index} index={index} />
                ))}
            </div>
            <div className='py-10 flex justify-center items-center '>
                <a href="https://github.com/mohammedsalhyen"
                    className='bg-[var(--pimary)] flex justify-center items-center font-[500] w-56 h-16 text-xl rounded-lg border-2 border-[var(--border)] transition-all hover:border-[var(--icon-theme-color-hover)]'
                >
                    See More
                    <MdKeyboardDoubleArrowRight className='project-icon-arrow' />
                </a>
            </div>
        </div>
    );
};

export default Project;
