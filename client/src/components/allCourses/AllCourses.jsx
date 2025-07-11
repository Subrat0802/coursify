import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CourseCard from "../ui/CourseCard";

const AllCourses = () => {
    const courses = useSelector((state) => state.course.allCourses) || [];
  return (
    <div className="px-10 pt-5">
      <div></div>

      <div className="text7xl flex gap-5 flex-wrap  w-full  text-white h-[100dvh]">
        {courses.map((el) => (
          <Link to={`show/${el._id}`}>
            <CourseCard key={el._id} data={el} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllCourses