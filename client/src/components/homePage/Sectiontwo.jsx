import React from "react";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import ShinyText from "../ui/ShinyText";

const Sectiontwo = ({ rev, codeblock, desc, subDesc }) => {
  return (
    <div className=" w-full flex justify-center py-10">
      <div
        className={`flex ${rev} gap-10  text-white w-full max-w-7xl`}
      >
        <div className="w-full md-w-[50%] flex flex-col justify-between">
          <div>
            <p className="font-bold text-5xl pb-4">{desc}</p>
            <ShinyText
              text={subDesc}
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>

          <div className="flex gap-5 pt-10">
            <Button
              text={"Try it yourself"}
              type={"primary"}
              icon={<FaArrowRight />}
            />
            <Button text={"Book a demo"} type={"secondary"} />
          </div>
        </div>
        {/* //"#5227FF", "#7cff67", "#5227FF" */}
        <div className=" border border-white/10 relative  flex w-full md-w-[50%]">
          <div className="absolute w-[60%] m-16 h-[70%] bg-gradient-to-br from-[#342961] via-[#134d0b] to-[#5227FF] rounded-full blur-3xl"></div>
          <div className="text-sm flex flex-col   text-yellow-300  w-fit px-1  py-1">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
          </div>
          <div className="text-sm font-bold text-yellow-500 flex flex-col z-20   border-white/10 w-fit px-1 gap-1 py-1">
            <TypeAnimation
              sequence={[codeblock, 10000, ""]}
              repeat={Infinity}
              cursor={true}
              style={{
                whiteSpace: "pre-line",
                display: "block",
              }}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectiontwo;
