import React from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import DashboardCourseCard from "../../ui/DashboardCourseCard";

const InstructorMyCourses = ({ userData }) => {

  return (
    <div className="w-full min-h-[40vh] p-6 mt-10 bg-[#131313] rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-2 md:justify-between md:items-center border-b text-[12px] border-white/10 pb-4">
        <h2 className="font-semibold text-white">My Courses</h2>
        <Link to="/dashboard/mycourses/createcourse">
          <Button text="Create Course" btn="primary" />
        </Link>
      </div>

      {/* Course list */}
      <DashboardCourseCard userData={userData}/>
    </div>
  );
};

export default InstructorMyCourses;
