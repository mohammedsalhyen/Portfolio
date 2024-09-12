"use client"
import React from 'react'
import { Specialization } from "@/constant/index"
const Lottie = dynamic(() => import('lottie-react'))

import dynamic from 'next/dynamic';
const Specialize = () => {
    return (
        <div className='main-prop  text-center border-b-2 border-[var(--border)]'>
            <div>
                <p className=' text-[var(--icon-theme-color-hover)] text-[24px]'>
                    WHAT I DO
                </p>
                <p className='section-header' id='Specialize'>
                    Specializing In
                </p>
            </div>
            <div className='container flex justify-center max-container padding-container mt-10'>
                <ul className='grid md:grid-cols-3 xs:grid-cols-1 xs:w-3/4 sm:w-full overflow-hidden  gap-10'>
                    {Specialization.map((item, index) => (
                        <li key={index} className='flex flex-col  items-center mb-10'>
                            <div className=' bg-[var(--secondary)]  rounded-full w-52 h-52 flex justify-center items-center p-5'
                            >
                                <Lottie className='max-w-full' animationData={item.animation} loop={true} />
                            </div>
                            <div>
                                <p className=' text-[24px] font-bold mt-10 ' >{item.name}</p>
                                <p className=' text-gray-100 text-[17px] mt-3 font-[500]'>{item.desc}</p>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Specialize
