import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { FaVideo } from "react-icons/fa6";

const ShowCourseLectures = ({ matchCourse }) => {
  const [openSectionId, setOpenSectionId] = useState(null);

  const handleClick = (sectionId) => {
    setOpenSectionId((prev) => (prev === sectionId ? null : sectionId));
  };

  if (!matchCourse || !matchCourse.courseContent) {
    return (
      <div className="p-4 rounded-lg bg-[#131313] text-white">
        No course content available.
      </div>
    );
  }

  return (
    <div className="p-4 border border-white/10 rounded-b-lg bg-[#131313] text-white">
      <div className="flex flex-col gap-4">
        {matchCourse.courseContent.map((section) => (
          <div
            key={section._id}
            className="border border-white/10 rounded-lg bg-[#1b1b1b]"
          >
            {/* Section Header */}
            <div
              className="flex justify-between items-center p-3 cursor-pointer hover:bg-[#222] transition-all"
              onClick={() => handleClick(section._id)}
            >
              <p className="font-medium text-white">{section.sectionName}</p>
              {openSectionId === section._id ? (
                <ChevronUp className="text-white" />
              ) : (
                <ChevronDown className="text-white" />
              )}
            </div>

            {/* Subsections */}
            {openSectionId === section._id && (
              <div className="flex flex-col">
                {section.subSection.length === 0 ? (
                  <div className="text-sm text-white/60 px-5 pb-3">No videos added yet.</div>
                ) : (
                  section.subSection.map((lecture) => (
                    <div
                      key={lecture._id}
                      className="flex justify-between items-center px-5 py-3 border-t border-white/5 hover:bg-[#252525]"
                    >
                      <div className="flex items-center gap-3 text-base text-white">
                        <FaVideo className="text-violet-400" />
                        <span>{lecture.title}</span>
                      </div>
                      <p className="text-sm text-white/70">{lecture.timeDuration}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCourseLectures;
