import React, { useState } from "react";
import { sideBarItem } from "../../data/sidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {
    
  const [sidebar, setSidebar] = useState("Dashboard");

  const handleSidebar = (title) => {
    setSidebar(title);
  };

  return (
    <div className="w-16 md:w-[15%] fixed left-0 h-full pt-12 bg-[#131313] border-r border-white/5 z-10 transition-all duration-300">
      
      <ul className="flex flex-col gap-1.5">
        {sideBarItem.map((el) => (
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
                
                {/* {sidebar === el.title && (
                    <div className="absolute right-0 w-1 h-full bg-white rounded-l-md"></div>
                )} */}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;