import React from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import DashboardCourseCard from "../../ui/DashboardCourseCard";

const InstructorMyCourses = ({ userData }) => {

  return (
    <div className="w-full min-h-[40vh] p-6 mt-10 bg-[#131313] rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <h2 className="text-xl font-semibold text-white">My Courses</h2>
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
