import React from 'react'
import ShinyText from '../ui/ShinyText'
import Button from '../ui/Button'
import { FaArrowRight } from "react-icons/fa6";

const SectionFive = () => {
  return (
    <div className='border-t border-[#4238CA]/30 border-dashed mb-20 pt-20'>
        <div className='max-w-7xl  mx-auto md:flex' >
            <div className='w-[50%] h-[79dvh]  p-3 relative'>
                <div className='w-[99%] h-[98%] bg-gradient-to-tr from-[#047857] '></div>
                <div className='absolute top-7 left-7'>
                    <img className='w-[100%]' src='https://studynotion-frontend.vercel.app/static/media/Instructor.8b4c4f204053f0dfe844.png'/>
                </div>
            </div>

            <div className='w-[50%] flex flex-col justify-center gap-3  pl-20'>
                <div className='flex flex-col text-3xl font-bold'>
                    <p>Become an </p>
                    <ShinyText text={"instructor"}/>
                </div>
                <div className='mb-8'>
                    <p className='text-white/30'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                </div>
                
                <div>
                    <Button text={"Satrt Teaching Today"} icon={<FaArrowRight />} btn={"primary"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFive