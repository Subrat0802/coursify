import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const BecomeAinstructoeBtn = () => {
  return (
    <div className='border-white/10 rounded-full border-2 hover:bg-gradient-to-tr from-indigo-800 to-emerald-800  text-white/50 mt-6 hover:scale-95 transition-all duration-200 hover:text-white/70 hover:border-[]' >
        <button className='flex justify-center gap-2 items-center border border-white/10 rounded-full px-6 py-2 '>
            BECOME AN INSTRUCTOR <FaArrowRight />
        </button>
    </div>
  )
}

export default BecomeAinstructoeBtn