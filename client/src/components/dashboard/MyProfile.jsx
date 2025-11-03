import React from "react";
import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { CalendarDays, Shield, BookOpen, GraduationCap } from "lucide-react";

const MyProfile = () => {
  const userData = useSelector((state) => state.auth.userData);
  console.log("userData profile", userData);

  const isInstructor = userData?.accountType === "Instructor";
  const createdCoursesCount = Array.isArray(userData?.courses) ? userData.courses.length : 0;
  const enrolledCount = Array.isArray(userData?.enrolledCourses) ? userData.enrolledCourses.length : 0;
  const joinedAt = userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : "N/A";
  const aboutText = userData?.additionalDetails?.about || "Tell the world about yourself. Share your background, interests, and goals.";

  return (
    <div className="w-full min-h-[91vh] p-4 sm:p-6 md:p-10 flex flex-col font-sans gap-6">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start bg-[#1A1A1D] rounded-lg p-6 sm:p-8 md:p-10 shadow-xl gap-6">
        <img
          className="rounded-full w-28 h-28 sm:w-36 sm:h-36 object-cover"
          src={userData?.image}
          alt="profile"
        />

        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
          <div className="flex flex-col md:pl-10 justify-center text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 font-sans text-2xl sm:text-3xl font-semibold items-center">
              <p className="first-letter:capitalize">{userData?.firstname}</p>
              <p className="first-letter:capitalize">{userData?.lastname}</p>
              {userData?.accountType && (
                <span className="text-xs sm:text-sm px-2 py-1 rounded-full bg-violet-600/20 text-violet-300 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  {userData.accountType}
                </span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start mt-2 text-white/60">
              <p className="text-sm break-all">{userData?.email}</p>
              <span className="hidden sm:block">•</span>
              <span className="text-sm flex items-center gap-1"><CalendarDays className="w-4 h-4" /> Joined {joinedAt}</span>
            </div>
          </div>
          <Button text={"Edit"} btn={"primary"} />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-lg bg-[#1A1A1D] border border-white/10 text-white">
          <p className="text-white/50 text-sm flex items-center gap-2"><BookOpen className="w-4 h-4" /> {isInstructor ? "Your Courses" : "Enrolled Courses"}</p>
          <p className="text-3xl font-bold mt-1">{isInstructor ? createdCoursesCount : enrolledCount}</p>
        </div>
        <div className="p-5 rounded-lg bg-[#1A1A1D] border border-white/10 text-white">
          <p className="text-white/50 text-sm flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Role</p>
          <p className="text-2xl font-semibold mt-1">{userData?.accountType || "N/A"}</p>
        </div>
        <div className="p-5 rounded-lg bg-[#1A1A1D] border border-white/10 text-white">
          <p className="text-white/50 text-sm">First Name</p>
          <p className="text-xl first-letter:capitalize">{userData?.firstname || "N/A"}</p>
        </div>
        <div className="p-5 rounded-lg bg-[#1A1A1D] border border-white/10 text-white">
          <p className="text-white/50 text-sm">Last Name</p>
          <p className="text-xl first-letter:capitalize">{userData?.lastname || "N/A"}</p>
        </div>
      </div>

      {/* About & Personal Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 p-6 rounded-lg bg-[#1A1A1D] border border-white/10 text-white">
          <div className="flex items-center justify-between">
            <p className="text-lg sm:text-xl font-semibold">About</p>
            <Button text={"Edit"} btn={"secondary"} />
          </div>
          <p className="mt-3 text-white/70 leading-7">
            {aboutText}
          </p>
        </div>
        <div className="p-6 rounded-lg bg-[#1A1A1D] border border-white/10 text-white">
          <p className="text-lg sm:text-xl font-semibold">Personal Details</p>
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <p className="text-sm text-white/50">Date of Birth</p>
              <p className="text-base sm:text-lg">{userData?.additionalDetails?.dateOfBirth || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-white/50">Gender</p>
              <p className="text-base sm:text-lg">{userData?.additionalDetails?.gender || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-white/50">Email</p>
              <p className="text-base sm:text-lg break-all">{userData?.email || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
