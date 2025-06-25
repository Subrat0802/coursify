/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getUser } from "../services/operations/authApi";
import { useDispatch } from "react-redux";
import { setUserData } from "../slices/authSlice";

const Dasboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      dispatch(setUserData(data));
    };

    fetchUser();
  }, []);
  return <div>Dasboard</div>;
};

export default Dasboard;
