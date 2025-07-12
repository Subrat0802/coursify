import React from 'react'
import DashboardCourseCard from '../../ui/DashboardCourseCard';

const StudentMyCourses = ({userData}) => {

  console.log("User data", userData);
  return (
    <div className='w-full min-h-[40vh] p-6 mt-10 bg-[#131313] rounded-2xl shadow-lg'>
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <p className='text-xl font-semibold text-white"'>Your courses</p>
      </div>
      <DashboardCourseCard userData={userData}/>
    </div>
  )
}

export default StudentMyCourses