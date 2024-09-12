"use client"
import React, { useState } from 'react'
import Button from './Button';
import Image from 'next/image';
import { FaRegEye, FaGithub } from "react-icons/fa6";
import { Project } from '@/types';
import ALtButton from './ALtButton';
const ProjectCard = ({ project, index }: { project:Project, index:number }) => {
    const [overlay, setOverlay] = useState(false);
    return (
        <div className={` xs:py-10 md:py-20 w-full flex justify-center overflow-hidden items-center gap-10 xs:flex-col md:flex-row ${index % 2 === 0 ? "md:felx-row" : "md:flex-row-reverse"}`} key={index} >
            <div
                className='text-center relative xs:hidden md:block md:w-[40%]'>
                <p className='text-[44px] text-[var(--icon-theme-color-hover)] font-bold  '>{project.name}</p>
                <p className=' text-gray-100 text-lg mb-8 pt-8'>{project.description}</p>
                <Button label={"View Project"} href={project.Link} />
            </div>
            <div
                className=' bg-[#000]  pb-7 rounded-lg overflow-hidden relative xs:w-full md:w-[60%]'>
                <div className='sm:h-[300px] xs:h-[400px] overflow-hidden relative'>
                    <div className='project-image  cursor-pointer'>
                        <img
                            src={`${project.img}`}
                            alt='project'
                            loading='lazy'
                            onClick={() => setOverlay(true)}
                        />
                    </div>
                    {overlay && (
                        <div className='xs:hidden md:block w-full h-full transition-all' onClick={() => setOverlay(false)}>
                            <div className='absolute top-0 left-0 w-full h-full bg-[#00000080]'></div>
                            <div className='relative w-full h-full flex items-center justify-center gap-10 z-30'>
                                <a href={project.Link} target='_blank' title='anchor to go to website' className=' text-5xl bg-[#181626] p-5 rounded-full'>
                                    <FaRegEye />
                                </a>
                                <a title='anchor to go to demo' href={project.githubLink} target='_blank' className=' text-5xl bg-[#181626] p-5 rounded-full'>
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                <div className=' ps-3 h-1/3 xs:border-t-[1px] border-white-100 md:border-none'>
                    <p className='pt-7  text-[24px] text-start font-bold'>{project.name}</p>
                    <ul className=' text-start xs:block md:grid grid-cols-3  pt-7  text-[var(--icon-theme-color-hover)] w-full'>
                        {project.skills?.map((item: string, index: number) => (
                            <li className=' inline' key={index}>
                                {item}<span className='xs:inline md:hidden mx-1'> </span>
                            </li>
                        ))}
                    </ul>
                    <div className=' xs:flex gap-2 py-3 md:hidden'>
                        <Button label={"Visit"} href={project.Link}/>
                        <ALtButton title={"Repo"} href={project.githubLink}/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
