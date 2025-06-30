import React from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const InstructorMyCourses = ({ userData }) => {
  const courses = useSelector((state) => state.auth.userData.courses)
  return (
    <div className="w-full  min-h-[40vh] p-5 mt-10 bg-[#131313] rounded-lg">
      
      <div className="flex justify-between  items-center">
        <p>My Courses</p>
        <Link to="/dashboard/mycourses/createcourse"><Button text={"Create Course"} btn={"primary"} /></Link>
      </div>
      <div className="w-full min-h-[40vh] flex justify-center  mt-10">
        {userData.courses.length === 0 ? <div className="text-xl flex flex-col justify-center items-center">No Courses found
          {/* <Button classStyle={"mt-4 "} text={"Create your courses, Now"} btn={"primary"}/> */}
        </div> : 
        <div className="w-full flex flex-col gap-4   h-full">
          {
            courses.map((el) => (
              <div className="flex bg-black rounded-lg border border-white/10"  key={el._id}>
                <div className="min-w-[30%]">
                  <img src={el.thumbnail} className="w-full rounded-l-lg"/>
                </div>  

                <div className="w-[70%]">
                  <p>{el.title}</p>
                  <p>{el.description}</p>
                  <p>{el.whatYouWillLearn}</p>
                </div>
              </div>
            ))
          }
        </div>
        
        }
      </div>
    </div>
  );
};

export default InstructorMyCourses;
