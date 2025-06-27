import React from 'react'
import InputTag from '../ui/InputTag'

const CreateCourseForm = () => {
  return (
    <div>
        {/* progress bar  */}
        <div className='flex justify-center pt-6'>
            <div className='border-2 p-3 rounded-full px-5 text-violet-800 border-violet-800 font-bold bg-violet-500'>1</div>
            <div className=' w-[20%] flex justify-center items-center'>
                <div className='w-full border'></div>
            </div>
            <div className='border p-3 rounded-full px-5'>2</div>
            <div className=' w-[20%] flex justify-center items-center'>
                <div className='w-full border'></div>
            </div>
            <div className='border p-3 rounded-full px-5'>3</div>
        </div>
        
        {/* course details  */}
        <div className='flex flex-col gap-5 mt-10  p-10 bg-[#131313]'>
            <label className='flex flex-col'><p>Course Name:<sup className='text-red-700'>*</sup></p>
                <InputTag />
            </label>
            
            <label className='flex flex-col'><p>Course Short Description:<sup className='text-red-700'>*</sup></p>
                <InputTag />
            </label>

            <label className='flex flex-col'><p>Price:<sup className='text-red-700'>*</sup></p>
                <InputTag />
            </label>

            <label className='flex flex-col'><p>Tags:<sup className='text-red-700'>*</sup></p>
                <InputTag />
            </label>

            <label className='flex flex-col'><p>Benifits of the course:<sup className='text-red-700'>*</sup></p>
                <InputTag />
            </label>
        </div>
    </div>
  )
}

export default CreateCourseForm