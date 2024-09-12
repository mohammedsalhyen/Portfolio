"use client"
import React, { useState } from 'react'

const Contact = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');
    const handleSubmit = () => {
        const distinationMail = 'mohammedsalhyen1@gmail.com';
        window.location.href = `mailto:${distinationMail}?subject=${encodeURIComponent(name),encodeURIComponent(email)}&body=${encodeURIComponent(message)}`;
    };
    return (
        <div className='main-prop max-container overflow-hidden padding-container'id='Contact'>
            <div className='section-header my-10 flex-center gap-2'>
                    <p>Contact</p>
                    <span>Me</span>
                </div>
            <div className=' flex justify-center relative py-20 bg-[#0d0d0db3] xs:h-full lg:h-[110vh] overflow-hidden'>
                <div className=' flex justify-around items-center xs:flex-col lg:flex-row xs:w-full md:w-5/6 h-full'>
                    <div className='relative flex-1 z-10 pb-20' >
                        <p className='h1-bold relative z-10  my-10'>Let's Talk!</p>
                        <div className=' bg-[var(--icon-theme-color-hover)] flex justify-center items-center h-72 w-72 rounded-full'>
                            <img src={"/asset/email-a7ee0f91.svg"} loading='lazy' alt='message' />
                        </div>
                    </div>
                    <div className='form-container relative  xs:w-[350px] md:w-[500px] ' >
                        <p className='sub-title text-center text-nowrap'>Contact Info</p>
                        <form className='flex flex-col mx-auto xs:w-[300px] md:w-[450px] ' onSubmit={handleSubmit}>
                            <label htmlFor='name'>Name</label>
                            <input type='text' title='name' required onChange={(e)=>{setName(e.target.value); console.log(name)}} />
                            <label htmlFor='email'>Email Address</label>
                            <input type='email' title='email' required onChange={(e)=>setEmail(e.target.value)}/>
                            <label htmlFor='message'>Email Address</label>
                            <textarea name='message' title='message' className=' max-h-[150px]' onChange={(e)=>setMessage(e.target.value)}></textarea>
                            <input type="submit" value="Let's Talk!"  className=' xs:w-[350px] md:w-[500px] link-text cursor-pointer bg-[var(--icon-theme-color-hover)] rounded-sm border-none py-5 relative left-[-25px] bottom-[-10px]' />
                        </form>
                    </div>
                </div>
                <div className='design-collection'>
                    <div className=' absolute top-0 left-0 xs:w-full  lg:w-[600px] xs:h-[180px]  md:h-[240px]'>
                        <img className='h-full w-full' src={"/asset/contact-bg1.webp"} loading='lazy' alt="imo" />
                    </div>
                    <div className='contact-bg-shadow md:left-[15%] top-[80%] xs:left-1/2'></div>
                    <div className='contact-bg-shadow left-[85%] md:block top-[20%] xs:hidden'></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
