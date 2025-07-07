/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setToken, setUserData } from "../../slices/authSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { getCategory } from "../../services/operations/categoryApi";
import { setCategory } from "../../slices/categorySlice";
import { Menu } from "lucide-react";
import { getAllCourses } from "../../services/operations/courseApi";

const Header = () => {
  const location = useLocation();
  // console.log("Tab:", location);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.userData);
  const handleLogOut = () => {
    Cookies.remove("token");
    dispatch(setToken(null));
    dispatch(setUserData(null));
    navigate("/");
    toast.success("Logout Successfully");
  };

  useEffect(() => {
    const fetchCat = async () => {
      const res = await getCategory();
      console.log("RESSS CATEGORY FE", res);
      dispatch(setCategory(res.data.data));
      dispatch(getAllCourses());
    };
    fetchCat();
  }, []);

  const category = useSelector((state) => state.category.categories);

  return (
    <div
      className={`w-full fixed top-0 z-10 h-[4rem] text-white font-sans py-3 px-3 md:px-0 ${
        location.pathname === "/" ? "" : "bg-[#131313]"
      }`}
    >
      <div className="flex max-w-7xl mx-auto items-center h-full justify-between ">
        <div>
          <Link to={"/"}>
            <p className="font-mono font-bold text-3xl">Coursify</p>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-8 font-semibold ">
            <li className="cursor-pointer">Home</li>

            <div className="relative z-20 group flex flex-col items-center">
              <div
                className="bg-[#131212]  rounded-lg w-36 absolute hidden group-hover:block 
                                p-2 mt-6 mr-2 z-20"
              >
                {category &&
                  category.map((el) => (
                    <p
                      className="pl-2 pr-5   cursor-pointer   
                                  border-b transition-all duration-200 border-white/10 hover:text-yellow-400
                                   hover:border-yellow-400 text-white/70  py-3"
                      key={el._id}
                    >
                      {el.name}
                    </p>
                  ))}
              </div>

              <li className="flex gap-2 cursor-pointer justify-center items-center">
                Category{" "}
                <div className="mt-1">
                  <MdKeyboardDoubleArrowDown />
                </div>
              </li>
            </div>

            <li className="cursor-pointer">About</li>
            <Link to={"/allcourses"}><li className="cursor-pointer">All Courses</li></Link>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-2">
          {token && user ? (
            <div className="flex gap-3 justify-center items-center">
              {/* <p className="cursor-pointer" onClick={handleLogOut}>
              logout
            </p> */}
              <Link to="/dashboard">
                <div className="relative flex flex-col group items-center">
                  <img className="w-8 rounded-full" src={user.image} />
                  <div className="absolute hidden top-8 transition-all duration-500 group-hover:block text-white/70 right-[2px] bg-[#222222] p-3 rounded-lg">
                    <p className="border-b transition-all duration-200 border-white/10 hover:text-yellow-400 hover:border-yellow-400 text-white/70  py-2">
                      Dashboard
                    </p>
                    <p
                      onClick={handleLogOut}
                      className="border-b transition-all duration-200 border-white/10 hover:text-yellow-400 hover:border-yellow-400 text-white/70  py-2"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-5">
              <Link to={"/signin"}>
                <Button classStyle={"text-sm px-1 md:text-lg"} text={"Login"} btn={"teritory"} />
              </Link>
              <Link to={"/signup"}>
                <Button classStyle={"text-sm px-1 md:text-lg "} text={"Signup"} btn={"teritory"} />
              </Link>
            </div>
          )}

          <div className=" md:hidden ">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
