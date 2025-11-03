/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { setToken, setUserData } from "../../slices/authSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { getCategory } from "../../services/operations/categoryApi";
import { setCategory } from "../../slices/categorySlice";
import { Menu, X, ShoppingCart } from "lucide-react";
import { getAllCourses } from "../../services/operations/courseApi";

const Header = () => {
  const location = useLocation();
  // console.log("Tab:", location);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  useEffect(() => {
    if (location.pathname !== "/") {
      setScrolled(true);
      return;
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const category = useSelector((state) => state.category.categories);

  const bgClass = location.pathname === "/"
    ? (scrolled ? "backdrop-blur-md bg-black/30 border-b border-white/10" : "")
    : "bg-[#131313]";

  return (
    <div
      className={`w-full fixed top-0 z-10 h-[4rem] text-white font-sans py-3 px-3 md:px-0 ${bgClass}`}
    >
      <div className="flex max-w-7xl mx-auto items-center h-full justify-between ">
        <div>
          <Link to={"/"}>
            <p className="font-mono font-bold text-xl md:text-3xl">Coursify</p>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-8 font-semibold ">
            <Link to="/"><li className="cursor-pointer">Home</li></Link>

            <div className="relative z-20 group flex flex-col items-center">
              <div
                className="bg-[#131212] transition-all duration-500 ease-in-out rounded-lg
                 w-36 absolute hidden group-hover:block 
                                p-2 mt-6 mr-2 z-20"
              >
                {category &&
                  category.map((el) => (
                    <p
                      className="pl-2 pr-5   cursor-pointer   
                                  border-b transition-all duration-200 border-white/10 hover:text-yellow-400
                                   hover:border-yellow-400 text-white/70  py-3"
                      key={el._id}
                      onClick={() => navigate(`/allcourses/category/${el._id}`)}
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
            <div className="flex gap-5 justify-center items-center">
              
            <ShoppingCart className="cursor-pointer hover:text-yellow-400" />
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
            <button aria-label="Open menu" onClick={() => setMobileOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-20 bg-black/60" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-[#111] border-l border-white/10 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="font-mono font-bold text-xl">Menu</p>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X />
              </button>
            </div>
            <nav className="flex flex-col gap-2 text-white/80">
              <button className="text-left py-2 hover:text-white" onClick={() => { setMobileOpen(false); navigate('/'); }}>Home</button>
              <button className="text-left py-2 hover:text-white" onClick={() => { setMobileOpen(false); navigate('/allcourses'); }}>All Courses</button>
              <details className="group">
                <summary className="cursor-pointer py-2 list-none select-none hover:text-white">Categories</summary>
                <div className="mt-1 ml-2 flex flex-col max-h-60 overflow-auto pr-1">
                  {category && category.map((el) => (
                    <button
                      key={el._id}
                      className="text-left py-2 text-white/70 hover:text-yellow-400 border-b border-white/10"
                      onClick={() => { setMobileOpen(false); navigate(`/allcourses/category/${el._id}`); }}
                    >
                      {el.name}
                    </button>
                  ))}
                </div>
              </details>
              {token && user ? (
                <>
                  <button className="text-left py-2 hover:text-white" onClick={() => { setMobileOpen(false); navigate('/dashboard'); }}>Dashboard</button>
                </>
              ) : (
                <>
                  <button className="text-left py-2 hover:text-white" onClick={() => { setMobileOpen(false); navigate('/signin'); }}>Login</button>
                  <button className="text-left py-2 hover:text-white" onClick={() => { setMobileOpen(false); navigate('/signup'); }}>Signup</button>
                </>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
