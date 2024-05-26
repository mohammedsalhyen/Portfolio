"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchSkill } from '@/utils/skill';
import { urlFor } from '@/lib/client';
import { motion } from 'framer-motion';
import { fadeIn, footerVariants, navVariants } from '@/utils/motion';
const Skill = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const skillData = await fetchSkill();
            setSkills(skillData);
        };
        fetchData();
    }, []);
    return (
        <div className='main-prop overflow-hidden'>
            <div className='relative items-center justify-center padding-container bg-[#000] py-10 w-full grid md:grid-cols-2 xs:grid-cols-1  '>
                <div>
                    <motion.div
                        variants={navVariants}
                        initial="hidden"
                        whileInView="show"
                        className='section-header mb-10' id='Skill'>
                        Skill Sit
                        <motion.p
                            variants={footerVariants}
                            initial="hidden"
                            whileInView="show"
                            className='block  text-center text-[20px]'>check my <span className='text-[var(--icon-theme-color)] '> skills</span></motion.p>
                    </motion.div>
                </div>
                <div className='grid xl:grid-cols-4 xs:grid-cols-2 my-10 md:grid-cols-3 gap-9'>
                    {skills?.map((skill: any, index: number) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("left", "spring", 0.2, index * 0.2)}
                            initial="hidden"
                            whileInView="show"
                            className=' skill-icon flex py-5 px-10 rounded-lg flex-col items-center  cursor-pointer  '>
                            <div className=''>
                                <Image src={`${urlFor(skill.image)}`} alt='skill pic ' width={50} height={50} />
                            </div>
                            <p className=' text-[var(--pimary)] text-nowrap hover:font-bold transition-all text-[18px] pt-4 '>{skill.name}</p>
                        </motion.div>

                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skill
