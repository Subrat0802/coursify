import React from "react";
import { Link, Outlet } from "react-router-dom";


const Courses = () => {
  
  return (
    <>
      <div className="px-12 flex gap-2 text-[11px] pt-24 ">
        <Link to={"/"}><p className="text-purple-800">Home /</p></Link>
        <Link to={"/dashboard"}> <p className="text-purple-800">Dashboard /</p></Link>
        <Link to="/allcourses"><p>All Courses /</p></Link>
      </div>
      <Outlet />
    </>
  );
};

export default Courses;
