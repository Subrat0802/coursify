import React from 'react'
import { useSelector } from 'react-redux'
import ShowCourseLectures from './ShowCourseLectures';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PublishCourseSection = () => {
    const navigate = useNavigate();
    const courseId = useSelector((state) => state.course.courseId._id);
    const courseDetails = useSelector((state) => state.auth.userData.courses);

    const matchCourse = courseDetails.find((el) => el._id === courseId) || null;

    if(!matchCourse) {
        return 
    }

    const handleClick = () => {
        toast.success("Course created successfully");
        navigate("/dashboard/mycourses");
    }
    return (
    <div className=''>
        <div className='w-full border border-white/10 p-5 bg-[#131313] rounded-t-lg '>
            <p className='text-3xl font-bold font-mono mb-4 text-yellow-400'>Course title: {matchCourse.title}</p>
            <p className='text-sm font-bold font-mono italic'>Description: {matchCourse.description}</p>
            <p className='text-sm font-bold font-mono'>What You Will Learn: {matchCourse.whatYouWillLearn}</p>
            <p className='text-sm font-bold font-mono'>Number of Lectures: {matchCourse.courseContent.length}</p>
            <div className='flex justify-between items-center p-6'>
                <div></div>
                <div className='flex gap-3'>
                    <Button text={"Save"} btn={"primary"}/>
                    <Button text={"Publish"} btn={"primary"} onClick={handleClick}/>
                </div>
            </div>
        </div>
        <ShowCourseLectures matchCourse={matchCourse}/>
        <div></div>
    </div>
  )
}

export default PublishCourseSection