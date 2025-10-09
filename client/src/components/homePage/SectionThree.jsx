import React, { useState } from "react";
import { learnAnyThing, learnAnyThingItems } from "../../data/homePage";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa6";

const SectionThree = () => {
  const [textState, setTextState] = useState("Free");

  const handleClick = (e) => {
    setTextState(e.target.innerText);
  };

  return (
    <div className="max-w-7xl mx-auto mb-16 flex flex-col font-sans justify-center items-center mt-36">

      <div className="text-center text-white/50 mb-7">
        <p className="text-4xl font-bold">Unlock the Power of Code</p>
        <p>Learn to Build Anything You Can Imagine</p>
      </div>
      <div className="flex gap-3 md:gap-10 justify-between items-center bg-gray-800/40 rounded-full border-b border-gray-700 p-1">
        {learnAnyThing.map((el) => (
          <p
            className={`md:text-md  p-2 px-2 md:px-4 cursor-pointer transition-all duration-200 rounded-full hover:bg-black ${
              textState === el.title ? "bg-black rounded-full" : ""
            }`}
            key={el.id}
            onClick={(e) => handleClick(e)}
          >
            {el.title}
          </p>
        ))}
      </div>

      <div className="flex md:flex-row flex-col md:gap-12 px-5 md:px-0">
        {learnAnyThingItems
          .filter((el) => el.title === textState)
          .map((el) => (
            <div
              key={el.id}
              className="border rounded-xl group transition-all relative duration-100 border-white/10 mt-10 cursor-pointer "
            >
              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-100 w-[40%] m-16 h-[40%] bg-gradient-to-br from-[#342961] via-[#134d0b] to-[#5227FF] rounded-full blur-3xl"></div>

              <div className="p-5 text-white/70 relative z-10">
                <p className="font-semibold text-2xl mb-6">{el.heading}</p>
                <p>{el.subHeading}</p>
              </div>

              <div className="border-t border-dashed flex justify-between p-5 relative z-10">
                <p>Beginner</p>
                <p>{el.lessons}</p>
              </div>
            </div>
          ))}
      </div>

      <div className=" flex mt-10 gap-7">
        <Button
          text={"Explore Full Catalog"}
          btn={"primary"}
          icon={<FaArrowRight />}
        />
        <Button text={"Learn More"} btn={"secondary"} />
      </div>
    </div>
  );
};

export default SectionThree;
