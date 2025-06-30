import React from 'react'
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const user = useSelector((state) => state.auth.userData);
    const loading = useSelector((state) => state.auth.loading);

    if (loading || !user) {
      return (
        <div className="w-full min-h-[calc(100vh)] flex items-center justify-center">
          <span className="text-white">Loading...</span>
        </div>
      );
    }

    return (
      <p className="flex gap-2">Hello <p className="first-letter:capitalize bg-[#0f0f0f]">{user.firstname}{" "}
      </p> <p className="first-letter:capitalize">{user.lastname}{" "}</p></p>
    )
}

export default Dashboard