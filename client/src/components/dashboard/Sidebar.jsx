import React, { useState } from "react";
import { sideBarItem } from "../../data/sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setToken, setUserData } from "../../slices/authSlice";

const Sidebar = () => {
    
  const [sidebar, setSidebar] = useState("Dashboard");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSidebar = (title) => {
    setSidebar(title);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(setToken(null));
    dispatch(setUserData(null));
    navigate("/");
  }

  return (
    <div className="w-16 md:w-[15%] fixed left-0 h-full pt-12 bg-[#131313] border-r border-white/5 z-10 transition-all duration-300">
      
      <ul className="flex flex-col gap-1.5">
        {sideBarItem.map((el) => (
          el.title === "Log Out" ? (
            <div key={el.id} onClick={handleLogout}
              className={`
                group
                flex items-center 
                text-white text-sm font-medium transition-all duration-200 
                cursor-pointer 
                hover:bg-[#1b1a1b] hover:text-white/90
                ${sidebar === el.title ? "bg-[#1b1a1b] text-white" : "text-white/70"}
              `}
            >
                <li className="flex items-center w-full py-3">
                    
                    <el.Icon 
                        className={`
                            w-5 h-5 transition-colors duration-200
                            mx-auto md:ml-5 md:mr-3 
                            ${sidebar === el.title ? "text-white" : "text-white/70 group-hover:text-white"}
                        `} 
                    /> 
                    
                    <p className="hidden md:block">{el.title}</p>
                </li>
                
            </div>
          ) : (
            <Link to={el.path} key={el.id} onClick={() => handleSidebar(el.title)}>
              <div
                className={`
                  group
                  flex items-center 
                  text-white text-sm font-medium transition-all duration-200 
                  cursor-pointer 
                  hover:bg-[#1b1a1b] hover:text-white/90
                  ${sidebar === el.title ? "bg-[#1b1a1b] text-white" : "text-white/70"}
                `}
              >
                  <li className="flex items-center w-full py-3">
                      
                      <el.Icon 
                          className={`
                              w-5 h-5 transition-colors duration-200
                              mx-auto md:ml-5 md:mr-3 
                              ${sidebar === el.title ? "text-white" : "text-white/70 group-hover:text-white"}
                          `} 
                      /> 
                      
                      <p className="hidden md:block">{el.title}</p>
                  </li>
              </div>
            </Link>
          )
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;