import React, { useState } from "react";
import { sideBarItem } from "../../data/sidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState("Dashboard");

  const handleSidebar = (e) => {
    setSidebar(e.target.innerText);
  };
  return (
    <div className="w-[13%] fixed left-0 h-[calc(100vh-3rem)] bg-transparent border-r border-white/10">
      <div>
        <ul className="mt-4 flex flex-col gap-2">
          {sideBarItem.map((el) => (
            <Link to={el.path}>
              <div
                onClick={handleSidebar}
                key={el.id}
                className={`pl-5 flex text-sm font-sans transition-all duration-200
                ${
                  sidebar === el.title
                    ? "justify-between bg-[#131313] bg-transparent "
                    : ""
                } cursor-pointer bg-blur-lg`}
              >
                <li className="text-white py-3 ">{el.title}</li>
                {sidebar === el.title ? (
                  <div className="max-h-full right-0 border-2 border-white/50">
                    {" "}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
