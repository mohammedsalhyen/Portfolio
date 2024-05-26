"use client"
import React, { useEffect, useState } from 'react'
import { fetchTimeline } from "@/utils/timeline"
import { motion } from 'framer-motion';
import { fadeIn, navVariants, textVariant } from '@/utils/motion';
const Timeline = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const projectData = await fetchTimeline();
            setTimeline(projectData);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className='main-prop overflow-hidden ' id='Experience'>
                <div className='section-header my-10 flex-center gap-2'>
                    <motion.p variants={navVariants} initial="hidden" whileInView="show">My</motion.p>
                    <motion.span variants={fadeIn("left", "spring", 0.5, 1)} initial="hidden" whileInView="show">Experience</motion.span>
                </div>
                <div className='max-container padding-container '>
                    <div className='w-[2px] h-full bg-gray-100 flex flex-col flex-shrink'></div>
                    {timeline?.map((item: any, index: number) => (
                        <div
                            className={`flex justify-center w-full  relative ${index % 2 === 0 ? "felx-row" : "flex-row-reverse"}`} key={index}
                        >
                            <motion.div className={`mb-10 flex flex-col px-5  flex-1 ${index % 2 === 0 ? "items-end" : "items-start"}`}
                                variants={textVariant(index * 0.5)} initial="hidden" whileInView="show"
                            >
                                <p className='text-[22px] font-bolder text-[#FFF] '>{item.jobTitle}</p>
                                <p className='text-[var(--icon-theme-color)] font-bold'>{item.workedFor}</p>
                                <p className='pt-3'>{item.responsibleFor}</p>
                            </motion.div>
                            <div className="w-[2px] min-h-full bg-gray-100 flex flex-col relative  top-1 ">
                                <div className="w-[25px] h-[25px] rounded-full bg-[var(--pimary)] absolute top-0 left-1/2 translate-x-[-50%] border-8 border-[#afafaf5c]"></div>
                            </div>
                            <motion.div
                                variants={textVariant(index * 0.3)} initial="hidden" whileInView="show"
                                className={`flex-1 flex flex-col px-5 pt-1  ${index % 2 === 0 ? "items-start" : "items-end"}`}
                            >
                                <p className=' text-gray-100  font-bold'>{item.start}/{item.end}  </p>
                            </motion.div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Timeline
