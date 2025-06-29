import React from "react";
import { useSelector } from "react-redux";
import InstructorMyCourses from "./InstructorMyCourses";
import StudentMyCourses from "./StudentMyCourses";

const UserCourses = () => {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <div>
      <p className="text-4xl text-white/60 font-bold">
        Hello {userData.accountType}
      </p>
      {userData.accountType === "Instructor" ? (
        <InstructorMyCourses userData={userData} />
      ) : (
        <StudentMyCourses />
      )}
    </div>
  );
};

export default UserCourses;
