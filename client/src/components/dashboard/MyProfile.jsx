import React from "react";
import { useSelector } from "react-redux";
import Button from "../ui/Button";

const MyProfile = () => {
  const userData = useSelector((state) => state.auth.userData);
  console.log("userData profile", userData);

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
            <div className="flex flex-wrap justify-center md:justify-start gap-2 font-sans text-2xl sm:text-3xl font-semibold">
              <p className="first-letter:capitalize">{userData?.firstname}</p>
              <p className="first-letter:capitalize">{userData?.lastname}</p>
            </div>
            <p className="text-sm text-white/50 mt-1">{userData?.email}</p>
          </div>
          <Button text={"Edit"} btn={"primary"} />
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="p-6 sm:p-8 md:p-10 w-full rounded-lg flex flex-col md:flex-row justify-between bg-[#1A1A1D] shadow-lg gap-6 md:gap-0">
        <div className="flex-1">
          <p className="text-lg sm:text-xl font-semibold">Personal Details:</p>

          <div className="mt-5 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-10">
            <label className="text-sm text-white/50 flex-1">
              First Name:{" "}
              <p className="first-letter:capitalize text-xl sm:text-2xl text-white">
                {userData?.firstname || "N/A"}
              </p>
            </label>
            <label className="text-sm text-white/50 flex-1">
              Last Name:{" "}
              <p className="first-letter:capitalize text-xl sm:text-2xl text-white">
                {userData?.lastname || "N/A"}
              </p>
            </label>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-10">
            <label className="text-sm text-white/50 flex-1">
              DOB:{" "}
              <p className="text-xl sm:text-2xl text-white">
                {userData?.additionalDetails?.dateOfBirth || "N/A"}
              </p>
            </label>
            <label className="text-sm text-white/50 flex-1">
              Gender:{" "}
              <p className="text-xl sm:text-2xl text-white">
                {userData?.additionalDetails?.gender || "N/A"}
              </p>
            </label>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <Button text={"Edit"} btn={"primary"} classStyle={"h-fit"} />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
