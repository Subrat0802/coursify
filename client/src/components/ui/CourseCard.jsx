import { Book, User } from "lucide-react";
import React from "react";

const CourseCard = (props) => {
  const { key, data, fullWidth } = props;

  return (
    <div key={key} className={`rounded-lg cursor-pointer hover:scale-95 hover:border-b-2 transition-all duration-300 p-4 h-fit border border-white/10 ${fullWidth ? "w-full" : "max-w-sm"}`}>
      <img className="rounded-lg" src={data.thumbnail} />

      <p className="mb-2 truncate overflow-hidden mt-2 text-white/70 whitespace-nowrap w-[90%] text-2xl font-sans font-bold">
        {data.title}
      </p>
      <p className="truncate overflow-hidden text-white/30 text-sm whitespace-nowrap w-[90%]">
        {data.description}
      </p>
      <div className="flex mt-3 justify-between items-center text-white/30 font-thin">
        <div className="flex text-yellow-500/70 text-sm justify-center items-center">
          <User className="w-[13px] h-[13px]" />{" "}
          <p>
            {data.instructor.firstname} {data.instructor.lastname}
          </p>
        </div>
        <div className="text-yellow-500/70 flex pr-1 text-sm justify-center items-center">
          <Book className="w-[13px] h-[13px]" />{" "}
          <p className="">
            Number of lectures: {data.courseContent.length}          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
