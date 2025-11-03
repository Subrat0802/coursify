/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getUserThunk } from "../services/operations/authApi";
import { useDispatch } from "react-redux";
// import { setUserData } from "../slices/authSlice";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DasboardLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  

  return (
    <div className="w-full min-h-[calc(100vh)] pt-[4rem] bg-[#0f0f0f]">
      <div className="flex">
        <Sidebar />
        <div className="w-full text-white/70 min-h-[90vh] ml-16 md:ml-[15%] p-4 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DasboardLayout;
