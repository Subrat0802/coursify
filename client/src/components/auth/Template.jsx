import React from "react";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";

const Template = ({ image, type, title, description1, description2 }) => {
  return (
    <div className="flex  flex-col-reverse md:flex-row   w-full min-h-[100vh] -z-10 font-sans">
      <div className="w-full md:w-[50%] py-28 md:py-0 flex justify-center items-center ">
        <div className=" w-[70%] relative">
          <div className="absolute w-[100%]  h-[100%] bg-gradient-to-br from-[#342961] via-[#134d0b] to-[#5227FF] rounded-full blur-3xl"></div>
          <img className="rounded-md  relative" src={image} />
        </div>
      </div>
      <div className="w-full  flex flex-col gap-4 justify-center items-center md:w-[50%] pt-40 md:pt-0  ">
        <div className="text-white/70 w-[70%] flex flex-col gap-1 mb-3">
          <p className="font-bold text-3xl">{title}</p>
          <p className="mb-2 text-white/30">{description1}</p>
          <p className="italic text-[#232b99] font-semibold font-mono">
            {description2}
          </p>
        </div>
        <div className="w-[70%]  text-white/70">
          {type == "signup" ? <SignupForm /> : <SigninForm />}
        </div>
      </div>
    </div>
  );
};

export default Template;
