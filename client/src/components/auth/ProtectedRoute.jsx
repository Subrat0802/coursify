import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import cookies from "js-cookie";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../services/operations/authApi';
import { setToken } from '../../slices/authSlice';


const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const reduxToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token && !reduxToken) {
      dispatch(setToken(token));
      dispatch(getUser());
    }
  }, [token, reduxToken, dispatch]);

  if (!token) {    
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
