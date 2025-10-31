import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ShowCourseLectures from "./ShowCourseLectures";
import { LanguagesIcon, Star, Timer, User } from "lucide-react";
import Button from "../../ui/Button";
import {  makeCoursePublished, studentBuyCourse } from "../../../services/operations/courseApi";
import { getUser } from "../../../services/operations/authApi";
import { setUserData } from "../../../slices/authSlice";

const ShowCourse = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const location = useLocation();
  const navigate = useNavigate();
  // const pathType = location.pathname.split("/")[2];
  
  const courses = useSelector((state) => state.course.allCourses);
  const userType = useSelector((state) => state.auth.userData.accountType);

  const courseData = courses.find((el) => el._id === id);

  const handleBuyClick = async () => {
    const response = await studentBuyCourse(courseData._id, navigate);
    if (!response) throw new Error("Error purchasing course");
    const userUpdate = await getUser();
    dispatch(setUserData(userUpdate));
  };

  const handlePublishCourse = async () => {
    const response = await makeCoursePublished(courseData._id, navigate);
    if (!response) throw new Error("Error publishing course");
    const userUpdate = await getUser();
    dispatch(setUserData(userUpdate));
  };


  // console.log("status",courses.status)

  if(courses === null){
    return <div>Loading...</div>
  }
  

  return (
    <div className={`overflow-x-hidden flex flex-col lg:flex-row p-5 md:p-10 gap-6 justify-center`}>
      
      {/* LEFT CONTENT */}
      <div className="flex flex-col w-full lg:w-2/3">
        
        {/* COURSE HEADER */}
        <div className="bg-[#131313] p-5 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{courseData?.title}</h2>
          <p className="text-white/50 text-sm md:text-base">{courseData?.description}</p>

          {/* RATING */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/30">
            <p>Rating:</p>
            <div className="flex gap-1 text-yellow-400/90">
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
              <Star className="w-4 h-4" />
            </div>
            <p>(650 ratings) - 1769 Students enrolled</p>
          </div>

          {/* COURSE INFO */}
          <div className="mt-4 flex flex-col md:flex-row gap-4 text-xs text-white/30">
            <div className="flex items-center gap-1">
              <Timer className="w-4 h-4" />
              <p>Created: 24/02/2012</p>
            </div>
            <div className="flex items-center gap-1">
              <LanguagesIcon className="w-4 h-4" />
              <p>Language: English</p>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <p>Instructor: Subrat Mishra</p>
            </div>
          </div>
        </div>

        {/* LECTURES SECTION */}
        <div className="mt-5 w-full">
          <ShowCourseLectures matchCourse={courseData} />
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-full lg:w-[30%] bg-[#242424] rounded-xl overflow-hidden">
        <img className="w-full h-auto" src={courseData?.thumbnail} alt="thumbnail" />

        <div className="p-5">
          <p className="text-xl md:text-3xl font-bold">Rs. {courseData?.price}</p>

          {userType === "Student" && (
            <Button
              text="Buy Course"
              onClick={handleBuyClick}
              btn="secondary"
              classStyle="w-full mt-3 text-black"
            />
          )}

          {
            courseData.status === "Published" ? <div></div> : 
              userType === "Instructor" && (
            <Button
              text="Publish"
              onClick={handlePublishCourse}
              btn="secondary"
              classStyle={`w-full mt-3 text-black`}
            />
          )}


          
        </div>
      </div>

    </div>
  );
};

export default ShowCourse;
