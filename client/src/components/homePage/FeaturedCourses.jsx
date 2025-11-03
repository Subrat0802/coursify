import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseCard from "../ui/CourseCard";

const FeaturedCourses = () => {
  const courses = useSelector((state) => state.course.allCourses) || [];
  const featured = courses
    .filter((c) => c.status === "Published")
    .slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Featured Courses</h2>
        <Link to="/allcourses" className="text-sm text-violet-400 hover:text-violet-300">View all</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((el) => (
          <Link key={el._id} to={`/allcourses/show/${el._id}`} className="block w-full">
            <CourseCard data={el} fullWidth />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;


