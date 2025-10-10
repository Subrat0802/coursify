import React from 'react'
import { reviewsData } from '../../data/homePage'

const SectionSix = () => {
  return (
    <div className='max-w-7xl flex flex-col gap-8 mx-auto pb-10'>
      <p className='text-xl font-semibold'>Reviews</p>

      <div className='overflow-x-scroll reviews-scroll'>
        <div className='flex gap-6 w-max'>
          {reviewsData.map((el) => (
            <div
              key={el.id}
              className='flex mb-4 flex-col gap-6 justify-center p-4 border rounded-xl border-white/40 w-[300px] shrink-0'
            >
              <p className='text-white/60'>{el.comment}</p>
              <p className='font-medium'>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionSix
