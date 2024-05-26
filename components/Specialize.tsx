
import React from 'react'
import { Specialization } from "@/constant/index"
const Lottie =dynamic(()=>import('lottie-react'))
import { navVariants, textVariant, zoomIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
const Specialize = () => {
    return (
        <div className='main-prop  text-center border-b-2 border-[var(--border)]'>
            <motion.div  variants={navVariants} initial="hidden" whileInView="show" >
                <p className=' text-[var(--icon-theme-color-hover)] text-[24px]'>
                    WHAT I DO
                </p>
                <p className='section-header' id='Specialize'>
                    Specializing In
                </p>
            </motion.div>
            <div className='container flex justify-center max-container padding-container mt-10'>
                <ul className='grid md:grid-cols-3 xs:grid-cols-1 xs:w-3/4 sm:w-full overflow-hidden  gap-10'>
                    {Specialization.map((item, index) => (
                        <li key={index} className='flex flex-col  items-center mb-10'>
                            <motion.div  variants={zoomIn(index*0.1,1)} initial="hidden" whileInView="show" className=' bg-[var(--secondary)]  rounded-full w-52 h-52 flex justify-center items-center p-5'
                            >
                                <Lottie className='max-w-full' animationData={item.animation} loop={true} />
                            </motion.div>
                            <motion.div variants={textVariant(index*0.1)} initial="hidden" whileInView="show">
                                <p className=' text-[24px] font-bold mt-10 ' >{item.name}</p>
                                <p className=' text-gray-100 text-[17px] mt-3 font-[500]'>{item.desc}</p>
                            </motion.div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Specialize
