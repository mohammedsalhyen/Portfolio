import { footerVariants, navVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
        <motion.footer 
        variants={footerVariants}
        initial="hidden"
        whileInView="show" 
        className=' footer-container main-prop relative overflow-hidden text-center h-full '>
            <motion.div
                    variants={navVariants}
                    initial="hidden"
                    whileInView="show"
            className='h-full  flex-col flex-center transition-all'> 
                <p className='h1-bold mt-20 mb-14'>
                    I can't wait to work together
                </p>
                <Link href="#Contact" className=' bg-white-100 py-4 px-3 text-[var(--icon-theme-color-hover)] w-[350px] transition-all text-center  link-text rounded-lg hover:text-white-100 hover:bg-[var(--icon-theme-color-hover)]'
                >
                    Let's Talk!
                </Link>
                <div className='flex gap-4 my-5 '
                >
                    <a title='anchor to go to facebook' className='footer-icon' href='https://www.facebook.com/mohammed.abdelsalhyen' rel='noopener' target='_blank'><FaFacebookF  /></a>
                    <a title='anchor to go to whatsapp' className='footer-icon' href='https://wa.me/201110948994' rel='noopener' target='_blank'><FaWhatsapp /></a>
                    <a title='anchor to go to linkedin' className='footer-icon' href='https://www.linkedin.com/in/mohammed-abdelsalhyen-sherief-8976441b8/' rel='noopener' target='_blank'><FaLinkedinIn/></a>
                </div>
            </motion.div>
        </motion.footer>
    )
}

export default Footer
