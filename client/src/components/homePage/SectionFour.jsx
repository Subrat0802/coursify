import React from "react";
import Button from "../ui/Button";
import ShinyText from "../ui/ShinyText";
import { fourthSection } from "../../data/homePage";

const SectionFour = () => {
  return (
    <div className="max-w-7xl m-auto mt-36">
      <div className="md:flex">
        <div className="md:w-[50%] px-5 mb-10 md:mb-0 md:px-0">
          <p className="text-4xl font-bold text-white/80 pr-10">
            Get the skills you need for a{" "}
            <ShinyText text={"Job that is in demand."} />
          </p>
        </div>
        <div className="md:w-[50%] px-5 md:px-0 flex flex-col gap-6">
          <p className="text-xl font-bold text-white/80">
            The modern StudyNotion is the dictates its own terms. Today, to be a
            competitive specialist requires more than professional skills.
          </p>

          <div>
            <Button text={"Learn More"} btn={"secondary"} />
          </div>
        </div>
      </div>

      <div className="w-full  md:flex mt-14">
        <div className="flex flex-col items-start justify-center gap-6 md:w-[50%] mb-12 md:mb-0">
          {fourthSection.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-8 p-4 shadow rounded-xl"
              >
                <Icon className="text-3xl text-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold">{item.heading}</h3>
                  <p className="text-gray-500">{item.subHeading}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:w-[50%] mx-5 md:mx-0 p-4 relative border border-dashed border-white/30 ">
          <img src="https://studynotion-frontend.vercel.app/static/media/TimelineImage.a610b1e5d891ac77fe93.png" />
          <div className="w-[90%] mx-auto absolute p-6 md:p-9 -bottom-14 left-1/2 transform -translate-x-1/2 right-0 bg-[#047857] flex justify-around items-center">
            <div className="flex gap-3 md:gap-7 justify-center items-center border-r w-[50%]">
              <p className="text-xl md:text-3xl font-bold">10</p>
              <div className="flex text-sm md:text-xl flex-col text-green-500">
                <p>YEARS</p>
                <p>EXPERIENCE</p>
              </div>
            </div>
            <div className="flex gap-3 md:gap-7 justify-center items-center">
              <p className="text-xl md:text-3xl font-bold">250</p>
              <div className="flex text-sm md:text-xl flex-col text-green-500">
                <p>TYPES OF</p>
                <p>COUSRES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
