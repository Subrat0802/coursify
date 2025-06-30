import React from 'react';
import { Navigate } from 'react-router-dom';
import cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const OpenRoute = ({ children }) => {
  const token = cookies.get('token');
  const reduxToken = useSelector((state) => state.auth.token);

  if (token || reduxToken) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default OpenRoute;
