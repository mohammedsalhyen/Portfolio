import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <div className=' container max-container mx-auto py-5 '>
                <div className=' w-full padding-container 2xl:px-0  flex justify-between  '>
                    <div className='image-container md:w-36 xs:w-28 '>
                        <Link href="/">
                            <img src={"/asset/logo.webp"} className=' w-full' alt='Mohammed' loading='lazy' />
                        </Link>
                    </div>
                    <div >
                        <a className='download-link' href={`/Mohammed-Abdelsalhyen-CV.pdf`}> Download CV</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
