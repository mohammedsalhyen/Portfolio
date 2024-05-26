
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, navVariants, textVariant, zoomIn } from "@/utils/motion";
const About = ({ cvUrl }: any) => {
  return (
    <div className='main-prop  mx-auto  border-b-2 border-[var(--border)]'>
      <div className='section-header mb-10 flex-center gap-2' id={"About"}>
        <motion.p variants={navVariants} initial="hidden" whileInView="show">About</motion.p>
        <motion.span variants={fadeIn("left", "spring", 0.5, 1)} initial="hidden" whileInView="show">Me</motion.span>
      </div>
      <div className='overflow-hidden max-container padding-container  about-container relative border-[1px] border-[var(--border)] hover:border-[var(--icon-theme-color)] py-10 xs:w-11/12 md:w-full mx-auto flex justify-between xs:flex-col-reverse md:flex-row  xs:text-center md:text-start'>
        <div
          className='flex flex-col xs:items-center md:items-start'>
          <motion.p variants={fadeIn("right", "spring", 1, 1)} initial="hidden" whileInView="show" className='text-[36px] xs:pt-10'>Front end Developer</motion.p>
          <motion.p variants={fadeIn("right", "spring", 0, 0.1)} initial="hidden" whileInView="show" className=' xs:w-full about-text-p  md:w-4/5 font-[400] pt-5 pb-10'>
            As a dedicated front-end developer specializing in frameworks like React.js, I thrive in collaborative work environments
            where creativity and innovation are encouraged. Constantly evolving alongside emerging technologies, I am passionate about
            refining my skills to deliver exceptional user experiences. With a keen eye for detail and a commitment to exceeding
            client expectations, I leverage my expertise to craft intuitive interfaces that enhance user engagement and drive
            meaningful interactions. My proactive approach to problem-solving ensures timely delivery of cutting-edge solutions
            that resonate with users and propel projects to success.
          </motion.p>
          <motion.div variants={textVariant(1)} initial="hidden" whileInView="show">
            <a className='download-link' href={`https://cdn.sanity.io/files/yulhtqt2/production/${cvUrl}.pdf`}> Download My CV</a>
          </motion.div>
        </div>
        <div className='w-full flex-center relative'>
          <div className=" w-60 h-auto">
            <motion.img variants={zoomIn(0.5, 2)} initial="hidden" whileInView="show" src={"/asset/mohammed-alt.webp"} alt='Mohammed' loading="lazy" />
          </div>
          <div className='about-shadow'></div>
        </div>
      </div>
    </div>
  )
}

export default About
