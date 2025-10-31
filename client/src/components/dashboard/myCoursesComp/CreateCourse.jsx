import React from "react";
import { Link } from "react-router-dom";
import CreateCourseForm from "./CreateCourseForm";

const CreateCourse = () => {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-[91vh] md:p-7  font-sans">
      <div className="md:w-[70%] w-[100%] ">
        <div className="text-[11px] flex gap-2 mb-3">
          <Link to={"/dashboard/mycourses"}>
            <p>My courses</p>
          </Link>
          <p>/</p>
          <p className="text-violet-800">Create course</p>
        </div>
        <p className="text-2xl font-semibold">Create Your Course</p>
        <div className="  bg-[#0f0f0f]">
            <CreateCourseForm />
        </div>
      </div>
      <div className=" invisible md:visible md:w-[30%] w-full ">
        <div className="p-3 bg-[#131313] rounded-lg fixed right-6 w-[25%]">
          <p className="font-bold text-xl">⚡Course Upload Tips</p>
          <ul className="list-disc pl-7 flex flex-col gap-2">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
