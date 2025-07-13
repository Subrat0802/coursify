import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const DashboardCourseCard = ({userData}) => {
  return (
    <div className="w-full min-h-[40vh] flex justify-center mt-10">
        {userData.courses.length === 0 ? (
          <div className="text-white text-xl flex flex-col justify-center items-center">
            No Courses Found
          </div>
        ) : (
          <div className="w-full flex flex-col gap-6">
            {userData.courses.map((el) => (
              <Link to={`/dashboard/mycourses/${el._id}`}><div
                key={el._id}
                className="flex flex-col cursor-pointer md:flex-row bg-[#141414] hover:shadow-lg border-r border-r-[#0f0f0f] hover:bg-[#0f0f0f] transition-all duration-200  hover:border-r hover:border-white/10 rounded-xl overflow-hidden border-b border-b-white/10 shadow-sm"
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
                    <h3 className="text-2xl mb-2 font-semibold  text-white/80">{el.title}</h3>
                    <p className="text-sm text-white/40  font-sans line-clamp-2">
                      {el.description}
                    </p>
                    <p className="text-sm text-white/40 font-sans mt-2 italic">
                      What you'll learn:{" "}
                      <span className="text-white/30">
                        {el.whatYouWillLearn}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-white/50 mt-4">
                    
                    <span>Price: ₹{el.price}</span>
                    {userData.accountType === "Instructor" ? <span>
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
                    </span>: <div className='flex gap-3'>
                          <Button text={"Ask anything"} btn={"primary"}/>
                          <Button text={"Explore"} btn={"secondary"}/>
                      </div>}
                  </div>
                </div>
              </div></Link>
            ))}
          </div>
        )}
      </div>
  )
}

export default DashboardCourseCard