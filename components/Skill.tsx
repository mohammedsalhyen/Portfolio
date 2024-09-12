import React from 'react'
import Image from 'next/image'
import { fetchSkills } from '@/utils/data';
import { SkillType } from '@/types';
const Skill = async() => {
    const skills: SkillType[] = await fetchSkills();

    return (
        <div className='main-prop overflow-hidden'>
            <div className='relative items-center justify-center padding-container bg-[#000] py-10 w-full grid md:grid-cols-2 xs:grid-cols-1  '>
                <div>
                    <div
                        className='section-header mb-10' id='Skill'>
                        Skill Sit
                        <p className='block  text-center text-[20px]'>check my <span className='text-[var(--icon-theme-color)] '> skills</span></p>
                    </div>
                </div>
                <div className='grid xl:grid-cols-4 xs:grid-cols-2 my-10 md:grid-cols-3 gap-9'>
                    {skills?.map((skill: any, index: number) => (
                        <div
                            key={index}
                            className=' skill-icon flex py-5 px-10 rounded-lg flex-col items-center  cursor-pointer  '>
                            <div className=''>
                                <Image src={skill.img} alt='skill-img' width={50} height={50} />
                            </div>
                            <p className=' text-[var(--pimary)] text-nowrap hover:font-bold transition-all text-[18px] pt-4 '>{skill.name}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skill
