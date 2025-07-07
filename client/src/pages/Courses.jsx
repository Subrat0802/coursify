import React from "react";
import { useSelector } from "react-redux";
import CourseCard from "../components/ui/CourseCard";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = useSelector((state) => state.course.allCourses) || null;
  return (
    <div className="pt-24 p-10">
      <div></div>

      <div className="text7xl flex gap-5 flex-wrap  w-full  text-white h-[100dvh]">
        {courses.map((el) => (
          <Link to={`allcourses/${el._id}`}>
            <CourseCard key={el._id} data={el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
