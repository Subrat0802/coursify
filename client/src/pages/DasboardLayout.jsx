/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getUser } from "../services/operations/authApi";
import { useDispatch } from "react-redux";
import { setUserData } from "../slices/authSlice";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DasboardLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      dispatch(setUserData(data));
    };

    fetchUser();
  }, []);

  

  return (
    <div className="w-full min-h-[calc(100vh)] pt-[4rem] bg-[#0f0f0f]">
      <div className="flex">
        <Sidebar />
        <div className="w-[87%] absolute  right-0 text-white/70 flex justify-center items-center min-h-[90vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DasboardLayout;
