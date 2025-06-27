import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const InstructorMyCourses = ({ userData }) => {

  console.log("courses", userData.courses);
  return (
    <div className="w-full  min-h-[40vh] p-5 mt-10 bg-[#131313] rounded-lg">
      
      <div className="flex justify-between  items-center">
        <p>My Courses</p>
        <Link to="/dashboard/createCourse"><Button text={"Create Course"} btn={"primary"} /></Link>
      </div>
      <div className="w-full min-h-[40vh] flex justify-center items-center mt-10">
        {userData.courses.length === 0 ? <div className="text-xl flex flex-col justify-center items-center">No Courses found
          {/* <Button classStyle={"mt-4 "} text={"Create your courses, Now"} btn={"primary"}/> */}
        </div> : 
        <div>
          Hello Your cousrse
        </div>
        
        }
      </div>
    </div>
  );
};

export default InstructorMyCourses;
