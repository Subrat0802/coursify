import React from "react";
import { useSelector } from "react-redux";
import Button from "../ui/Button";

const MyProfile = () => {
  const userData = useSelector((state) => state.auth.userData);
  console.log("userData profile", userData);
  return (
    <div className=" w-full min-h-[91vh] p-10 flex flex-col font-sans">
      <div className="w-full flex bg-[#131313] rounded-lg p-10 shadow-xl">
        <div>
          <img className="rounded-full" width={150} src={userData.image} />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col  pl-10 justify-center ">
            <div className="flex gap-1 font-sans text-3xl font-semibold  ">
              <p className="first-letter:capitalize">{userData.firstname}</p>
              <p className="first-letter:capitalize">{userData.lastname}</p>
            </div>
            <div className="flex gap-1 font-sans text-sm text-white/50   ">
              <p className="first-letter:capitalize">{userData.email}</p>
            </div>
          </div>
          <Button text={"Edit"} btn={"primary"}/>
        </div>
      </div>
      <div className="p-10 w-full rounded-lg mt-10 flex justify-between bg-[#131313] shadow-lg">
        
        <div>
          <p className="text-xl font-semibold">Personal Details:</p>

          <div className="mt-5 flex w-full min-w-[30vw] justify-between" >
            <label className="text-sm text-white/50">
              First Name: <p className="first-letter:capitalize text-2xl text-white">{userData.firstname}</p>
            </label>
            <label className="text-sm text-white/50">
              Last Name: <p className="first-letter:capitalize text-2xl text-white">{userData.lastname}</p>
            </label>
          </div>

          <div className="mt-5 flex w-full min-w-[30vw] justify-between" >
            <label className="text-sm text-white/50">
              DOB: <p className="first-letter:capitalize text-2xl text-white">{userData.additionalDetails.dateOfBirth ?
                <p>{userData.additionalDetails.dateOfBirth}</p> : <p>N/A</p>}</p>
            </label>
            <label className="text-sm text-white/50">
              Last Name: <p className="first-letter:capitalize text-2xl text-white">{userData.additionalDetails.gender ?
                <p>{userData.additionalDetails.gender}</p> : <p>N/A</p>}</p>
            </label>
          </div>
        </div>
        <div>
          <Button text={"Edit"} btn={"primary"}/>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
