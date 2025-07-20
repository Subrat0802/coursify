import React from 'react'
import banner from "../../assets/Images/banner.mp4"

const SectionThree = () => {
  return (
    <div className='max-w-7xl mx-auto flex mb-16'>
      <div className='w-[50%]'>
        <video className='rounded-xl' src={banner} controls autoPlay/>
      </div>
      <div className='w-[50%]'>

      </div>
    </div>
  )
}

export default SectionThree