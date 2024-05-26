"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaFacebookF } from "react-icons/fa";
const Spline =dynamic(()=>import('@splinetool/react-spline'));
import Lottie from "lottie-react";
import hero from "../public/animation/Hero.json";
import ALtButton from '../helper/ALtButton';
import { zoomIn } from '@/utils/motion';
import { motion } from 'framer-motion';

const Hero = ({cvUrl}:any) => {
    const socialLinks = [
        { href: "https://www.linkedin.com/in/mohammed-abdelsalhyen-sherief-8976441b8/", icon: <FaLinkedinIn />, text: "LinkedIn" },
        { href: "https://github.com/mohammedsalhyen", icon: <FaGithub />, text: "Github" },
        { href: "https://www.facebook.com/mohammed.abdelsalhyen", icon: <FaFacebookF />, text: "Facebook" },
        { href: "https://wa.me/201110948994", icon: <FaWhatsapp />, text: "Whatsapp" }
    ];
    return (
        <main className=' xs:px-5 xl:px-0 main-prop w-full border-b-2 border-[var(--border)]'>
            <div className=' max-container flex  xs:flex-col xl:flex-row  justify-between   '>
                <div className=' flex-1 relative overflow-hidden xs:text-center xl:text-start'>
                    <div>
                        <p className='sub-title mb-5'>Hi,</p>
                        <p className='h1-regular text-white-100'>
                            my name is
                            <span className='block sm:h1-bold xs:text-[52px] xs:font-[900] text-[var(--icon-theme-color)] mt-3 mb-6' >
                                Mohammed
                            </span>
                        </p>
                        <p className='sub-title pt-5 mb-6'>Front end Developer</p>
                    </div>
                    <div className='flex sm:w-full lg:w-fit gap-5 xs:justify-center xl:justify-start'>
                        <ALtButton title={"Let's talk!"} href={"#Contact"} />
                        <a className='download-link' href={`https://cdn.sanity.io/files/yulhtqt2/production/${cvUrl}.pdf`}> Download My CV</a>
                    </div>
                    <div>
                        <ul
                            className='grid xs:grid-cols-2 md:grid-cols-4 xs:text-center xs:pb-20 xl:pb-0 gap-7 w-full  mt-10'>
                            {socialLinks.map((link, index) => (
                                <li key={index}
                                    className='flex w-full '>
                                    <a href={link.href} target='_blank' className='flex items-center  ' title='anchor to go to icon'>
                                        <span className=' flex-center m-2 text-xl w-[40px] h-[40px] bg-white-100 text-[var(--icon-theme-color-hover)] font-bold rounded-full '>{link.icon}</span>
                                        <p className='text-[#bfbfbf] font-bold hover:translate-x-2 transition-all '>{link.text}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=" absolute sm:top-[-100px]  xs:top-0 left-0 w-full h-full font-extrabold text-[#131313] xs:text-[120px] sm:text-[230px] -z-10">DEV<br />ELOP </div>
                </div>
                <motion.div
                    variants={zoomIn(0, 2)}
                    initial="hidden"
                    whileInView="show"
                    className=' flex-1 flex-center flex-col '>
                    <div className='md:flex xs:hidden w-full h-full'>
                        <Spline className='w-full h-full' scene="https://prod.spline.design/JaVYqk8rGvLuEYJF/scene.splinecode" />
                    </div>
                    <div className='md:hidden xs:flex-center w-full h-full'>
                        <Lottie animationData={hero} loop={true} />
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
export default Hero
