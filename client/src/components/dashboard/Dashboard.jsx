import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.userData);
  return (
    <p className="flex gap-2">Hello <p className="first-letter:capitalize bg-[#0f0f0f]">{user.firstname}{" "} </p> <p className="first-letter:capitalize">{user.lastname}{" "} </p></p>
  )
}

export default Dashboard