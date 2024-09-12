import React from 'react'
import { navbar_links } from '@/constant/index'
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
                    <div className='flex lg:gap-10 xs:gap-0 items-center '>
                        <ul className='xs:hidden xl:flex link-text gap-4'>
                            {navbar_links.map((navbar_link) => (
                                <li className=' hover:text-[var(--icon-theme-color-hover)] transition-all ease-out duration-300 text-nowrap' key={navbar_link.key}>
                                    <Link href={navbar_link.href}>
                                        {navbar_link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <a className='download-link' href={`/Mohammed-Abdelsalhyen-CV.pdf`}> Download CV</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
