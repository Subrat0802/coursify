import React from "react";
import ShinyText from "../ui/ShinyText";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa6";

const SectionFive = () => {
  return (
    <div className="border-t border-[#4238CA]/30 border-dashed mb-20 pt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-5">
        
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[45vh] md:h-[80vh]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#047857] rounded-lg" />
          <img
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[400px] object-contain"
            src="https://studynotion-frontend.vercel.app/static/media/Instructor.8b4c4f204053f0dfe844.png"
            alt="Instructor"
          />
        </div>

        {/* Content Section */}
        <div className="flex w-full md:w-1/2 flex-col justify-center gap-4 md:gap-6 text-center md:text-left">
          <div className="text-3xl font-bold">
            <p>Become an</p>
            <ShinyText text={"instructor"} />
          </div>

          <p className="text-white/30 max-w-lg mx-auto md:mx-0">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              text={"Start Teaching Today"}
              icon={<FaArrowRight />}
              btn={"primary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
