import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ShowCourseLectures from "./ShowCourseLectures";
import { LanguagesIcon, Star, StarIcon, Timer, User } from "lucide-react";
import Button from "../../ui/Button";
import { makeCoursePublished, studentBuyCourse } from "../../../services/operations/courseApi";
import { getUser } from "../../../services/operations/authApi";
import { setUserData } from "../../../slices/authSlice";

const ShowCourse = () => {
  const para = useParams();
  const dispatch = useDispatch();
  const loca = useLocation();
  const navigate = useNavigate();
  const pathone = loca.pathname.split("/");
  console.log("LOCA", loca, pathone[2]);
  const course = useSelector((state) => state.course.allCourses);
  const userType = useSelector((state) => state.auth.userData.accountType);

  const courseData = course.find((el) => el._id === para.id) || null;

  const handleBuyClick = async () => {
    const response = studentBuyCourse(courseData._id, navigate);
    if(!response) {
      throw new Error("Error while sending request publish course");
    }
    const userUpdate = await getUser();
    dispatch(setUserData(userUpdate));
  }

  const handlePublishCourse = async () => {
    const response = makeCoursePublished(courseData._id, navigate);
    if(!response) {
      throw new Error("Error while sending request publish course");
    }
    const userUpdate = await getUser();
    dispatch(setUserData(userUpdate));
  }

  return (
    <div className={`${pathone[2] == "show" ? "flex p-10  gap-4 px-36 justify-center " : "relative"}`}>
      <div className="flex flex-col   w-[] ">

      <div className="bg-[#131313] relative py-5 rounded-t-lg">
        <div className="max-w-3xl text-sm  px-5  border-r border-white/10">
          <p className="text-2xl font-bold mb-3 text-white">
            {courseData.title}
          </p>
          <p className=" font-semibold text-white/50 text-sm">
            {courseData.description}
          </p>
          <div className="text-yellow-400/80 flex  items-center">
            <p className="text-white/30">Rating and reviews:</p>
            <div className="flex ml-2">
              <Star className="w-[14px] h-[14px]" />
              <Star className="w-[14px] h-[14px]" />
              <Star className="w-[14px] h-[14px]" />
              <Star className="w-[14px] h-[14px]" />
            </div>
            <p className="ml-2">(650 ratings) - 1769 Students enolled</p>
          </div>

          <div className="flex gap-16 justify-between items-center mt-4">
            <div className="text-white/30 gap-1 flex justify-between items-center ">
              <Timer className="  w-[14px] h-[14px]" />
              <p>Created at: 24/02/2012</p>
            </div>
            <div className="text-white/30 gap-1 flex justify-between items-center ">
              <LanguagesIcon className="  w-[14px] h-[14px]" />
              <p>Language: English</p>
            </div>
            <div className="text-white/30 gap-1 flex justify-between items-center ">
              <User className="  w-[14px] h-[14px]" />
              <p>Created by: Subrat Mishra</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl border-white/10 relative rounded-lg">
        <ShowCourseLectures matchCourse={courseData} />
      </div>
      </div>

      <div className={`${pathone[2] == "show" ? "max-w-[26rem]  bg-[#242424] right-8 top-8 rounded-xl h-fit" : "absolute bg-[#242424] right-8 top-8 w-[30vw] rounded-xl"}`}>
        <img className="rounded-t-lg" src={courseData.thumbnail} />
        <div className="p-5 font-sans">
          <p className="text-3xl font-bold">Rs. {courseData.price}</p>
          {
              userType === "Student" && <Button text={"Buy Course "} onClick={handleBuyClick}  btn={"secondary"} classStyle={"w-full  text-black mt-2"}/>
          }
          {
              userType === "Instructor" && <Button onClick={handlePublishCourse} text={"Publish"}  btn={"secondary"} classStyle={"w-full  text-black mt-2"}/>
          }
        </div>
      </div>
    </div>
  );
};

export default ShowCourse;
