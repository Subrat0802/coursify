import React from "react";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const InstructorMyCourses = ({ userData }) => {
  const courses = useSelector((state) => state.auth.userData.courses);

  return (
    <div className="w-full min-h-[40vh] p-6 mt-10 bg-[#131313] rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <h2 className="text-xl font-semibold text-white">My Courses</h2>
        <Link to="/dashboard/mycourses/createcourse">
          <Button text="Create Course" btn="primary" />
        </Link>
      </div>

      {/* Course list */}
      <div className="w-full min-h-[40vh] flex justify-center mt-10">
        {userData.courses.length === 0 ? (
          <div className="text-white text-xl flex flex-col justify-center items-center">
            No Courses Found
          </div>
        ) : (
          <div className="w-full flex flex-col gap-6">
            {courses.map((el) => (
              <Link to={`/dashboard/mycourses/${el._id}`}><div
                key={el._id}
                className="flex flex-col cursor-pointer md:flex-row bg-[#141414] hover:shadow-lg  hover:border-r hover:border-white/10 rounded-xl overflow-hidden border-b border-b-white/10 shadow-sm"
               >
                {/* Thumbnail */}
                <div className="md:w-[30%] w-full h-[180px] md:h-auto">
                  <img
                    src={el.thumbnail}
                    alt={el.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Course Info */}
                <div className="flex flex-col justify-between gap-2 p-5 text-white md:w-[70%] w-full">
                  <div>
                    <h3 className="text-lg font-semibold">{el.title}</h3>
                    <p className="text-sm text-white/80 line-clamp-2">
                      {el.description}
                    </p>
                    <p className="text-sm text-white/60 italic mt-1">
                      What you'll learn:{" "}
                      <span className="text-white/70">
                        {el.whatYouWillLearn}
                      </span>
                    </p>
                  </div>

                  {/* Course Meta Info */}
                  <div className="flex items-center justify-between text-sm text-white/50 mt-4">
                    <span>
                      Status:{" "}
                      <span
                        className={`font-medium ${
                          el.status === "Published"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }`}
                      >
                        {el.status}
                      </span>
                    </span>
                    <span>Price: ₹{el.price}</span>
                  </div>
                </div>
              </div></Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorMyCourses;
