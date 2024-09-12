import React  from 'react'
import { fetchExperiences } from '@/utils/data';
const Timeline =async () => {
    const timeline= await fetchExperiences()
    return (
        <div>
            <div className='main-prop overflow-hidden ' id='Experience'>
                <div className='section-header my-10 flex-center gap-2'>
                    <p >My</p>
                    <span >Experience</span>
                </div>
                <div className='max-container padding-container '>
                    <div className='w-[2px] h-full bg-gray-100 flex flex-col flex-shrink'></div>
                    {timeline?.map((item: any, index: number) => (
                        <div
                            className={`flex justify-center w-full  relative ${index % 2 === 0 ? "felx-row" : "flex-row-reverse"}`} key={index}
                        >
                            <div className={`mb-10 flex flex-col px-5  flex-1 ${index % 2 === 0 ? "items-end" : "items-start"}`}>
                                <p className='text-[22px] font-bolder text-[#FFF] '>{item.jobTitle}</p>
                                <p className='text-[var(--icon-theme-color)] font-bold'>{item.workedFor}</p>
                                <p className='pt-3'>{item.responsibleFor}</p>
                            </div>
                            <div className="w-[2px] min-h-full bg-gray-100 flex flex-col relative  top-1 ">
                                <div className="w-[25px] h-[25px] rounded-full bg-[var(--pimary)] absolute top-0 left-1/2 translate-x-[-50%] border-8 border-[#afafaf5c]"></div>
                            </div>
                            <div className={`flex-1 flex flex-col px-5 pt-1  ${index % 2 === 0 ? "items-start" : "items-end"}`}>
                                <p className=' text-gray-100  font-bold'>{item.start}/{item.end}  </p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Timeline
