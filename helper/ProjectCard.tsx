"use client"
import React, { useState } from 'react'
import Button from './Button';
import Image from 'next/image';
import { FaRegEye, FaGithub } from "react-icons/fa6";
import { urlFor } from '@/lib/client';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';
const ProjectCard = ({ project, index }: any) => {
    const [overlay, setOverlay] = useState(false);
    return (
        <div className={` xs:py-10 md:py-20 w-full flex justify-center overflow-hidden items-center gap-10 xs:flex-col md:flex-row ${index % 2 === 0 ? "md:felx-row" : "md:flex-row-reverse"}`} key={index} >
            <motion.div
                variants={fadeIn("right","spring",0.5, 1)}
                initial="hidden"
                whileInView="show"
                className='text-center relative xs:hidden md:block md:w-[40%]'>
                <p className='text-[44px] text-[var(--icon-theme-color-hover)] font-bold  '>{project.name}</p>
                <p className=' text-gray-100 text-lg mb-8 pt-8'>{project.description}</p>
                <Button label={"View Project"} href={project.link} />
            </motion.div>
            <motion.div
                variants={textVariant(0.5)}
                initial="hidden"
                whileInView={"show"}
                className=' bg-[#000]  pb-7 rounded-lg overflow-hidden relative xs:w-full md:w-[60%]'>
                <div className='sm:h-[300px] xs:h-[400px] overflow-hidden relative'>
                    <div className='project-image  cursor-pointer'>
                        <Image
                            src={`${urlFor(project.image)}`}
                            alt='project'
                            width={1000}
                            height={600}
                            onClick={() => setOverlay(true)}
                        />
                    </div>
                    {overlay && (
                        <div className='xs:hidden md:block w-full h-full transition-all' onClick={() => setOverlay(false)}>
                            <div className='absolute top-0 left-0 w-full h-full bg-[#00000080]'></div>
                            <div className='relative w-full h-full flex items-center justify-center gap-10 z-30'>
                                <a href={project.link} target='_blank' title='anchor to go to website' className=' text-5xl bg-[#181626] p-5 rounded-full'>
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
                        {project.skill?.map((item: any, index: number) => (
                            <li className=' inline' key={index}>
                                {item}<span className='xs:inline md:hidden mx-1'>,</span>
                            </li>
                        ))}
                    </ul>
                    <div className=' xs:flex gap-4 py-3 md:hidden'>
                        <a href={project.link} target='_blank' title='anchor to go to website' className=' text-4xl '>
                            <FaRegEye />
                        </a>
                        <a title='anchor to go to demo' href={project.githubLink} target='_blank' className=' text-4xl '>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectCard
