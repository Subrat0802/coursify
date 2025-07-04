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
    };
    fetchCat();
  }, []);

  const category = useSelector((state) => state.category.categories);

  return (
    <div
      className={`w-full fixed top-0 z-10 h-[4rem] text-white font-sans py-3 ${
        location.pathname === "/" ? "" : "bg-[#131313]"
      }`}
    >
      <div className="flex max-w-7xl mx-auto items-center h-full justify-between ">
        <div>
          <Link to={"/"}>
            <img src="data:image/png;base64,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" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-8 font-semibold">
            <li className="cursor-pointer">Home</li>

            <div className="relative group flex flex-col items-center">
              <div className="bg-[#131212] rounded-lg w-36 absolute hidden group-hover:block 
                                p-2 mt-6 mr-2 z-10">
                {category &&
                  category.map((el) => (
                    <p
                      className="pl-2 pr-5  hover:scale-95 transition-all duration-200 py-3   
                                  hover:bg-gradient-to-tr from-indigo-900 via-purple-900 to-green-800 border-white/10 w-full rounded-lg cursor-pointer "
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
            <li className="cursor-pointer">Contact us</li>
          </ul>
        </div>
        {token && user ? (
          <div className="flex gap-3 justify-center items-center">
            {/* <p className="cursor-pointer" onClick={handleLogOut}>
              logout
            </p> */}
            <Link to="/dashboard">
              <div className="relative flex flex-col group items-center">
                <img className="w-8 rounded-full" src={user.image} />
                <div className="absolute hidden top-8 transition-all duration-500 group-hover:block text-white/70 right-[2px] bg-[#222222] p-3 rounded-lg">
                  <p className="border-b transition-all duration-200 border-white/50 hover:text-yellow-400 hover:border-yellow-400 text-white/70  py-2">Dashboard</p>
                  <p onClick={handleLogOut} className="border-b transition-all duration-200 border-white/50 hover:text-yellow-400 hover:border-yellow-400 text-white/70  py-2">Logout</p>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-5">
            <Link to={"/signin"}>
              <Button text={"Login"} btn={"teritory"} />
            </Link>
            <Link to={"/signup"}>
              <Button text={"Signup"} btn={"teritory"} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
