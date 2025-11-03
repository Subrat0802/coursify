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

    const isInstructor = user?.accountType === "Instructor";
    const createdCoursesCount = Array.isArray(user?.courses) ? user.courses.length : 0;
    const enrolledCount = Array.isArray(user?.enrolledCourses) ? user.enrolledCourses.length : 0;

    const totalStudentsAcrossCourses = isInstructor
      ? (Array.isArray(user?.courses)
          ? user.courses.reduce((acc, c) => acc + (Array.isArray(c?.studentEnrolled) ? c.studentEnrolled.length : 0), 0)
          : 0)
      : (Array.isArray(user?.enrolledCourses) ? user.enrolledCourses.length : 0);

    const monthlyData = new Array(30).fill(Math.max(0, totalStudentsAcrossCourses));

    const Chart = () => {
      const width = 640;
      const height = 200;
      const padding = 24;
      const maxY = Math.max(...monthlyData) || 1;
      const stepX = (width - padding * 2) / (monthlyData.length - 1);

      const points = monthlyData.map((y, i) => {
        const x = padding + i * stepX;
        const yPos = height - padding - (y / maxY) * (height - padding * 2);
        return `${x},${yPos}`;
      }).join(" ");

      const areaPoints = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;

      return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[220px]">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#333" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#333" />
          <polyline points={areaPoints} fill="url(#lineGrad)" stroke="none" />
          <polyline points={points} fill="none" stroke="#8b5cf6" strokeWidth="2" />
          {monthlyData.map((y, i) => {
            const x = padding + i * stepX;
            const yPos = height - padding - (y / maxY) * (height - padding * 2);
            return <circle key={i} cx={x} cy={yPos} r="3" fill="#c4b5fd" />
          })}
        </svg>
      );
    };

    return (
      <div className="w-full min-h-[60vh] p-4 md:p-6 lg:p-8">
        <div className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
          <span className="opacity-80">Hello </span>
          <span className="first-letter:capitalize">{user.firstname} </span>
          <span className="first-letter:capitalize">{user.lastname}</span>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#141414] border border-white/10 rounded-xl p-5 text-white/80">
            <p className="text-sm text-white/50">{isInstructor ? "Your Courses" : "Enrolled Courses"}</p>
            <p className="text-3xl font-bold mt-1">{isInstructor ? createdCoursesCount : enrolledCount}</p>
          </div>
          <div className="bg-[#141414] border border-white/10 rounded-xl p-5 text-white/80">
            <p className="text-sm text-white/50">Account Type</p>
            <p className="text-3xl font-bold mt-1">{user.accountType}</p>
          </div>
          <div className="bg-[#141414] border border-white/10 rounded-xl p-5 text-white/80">
            <p className="text-sm text-white/50">Email</p>
            <p className="text-base mt-1 break-all">{user.email}</p>
          </div>
        </div>

        {isInstructor && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-[#141414] border border-white/10 rounded-xl p-5 text-white/80">
            <div className="flex items-center justify-between mb-3">
              <p className="text-white/70 font-semibold">Students (Last 30 days)</p>
              <span className="text-xs text-white/40">Aggregate</span>
            </div>
            <Chart />
          </div>
          <div className="bg-[#141414] border border-white/10 rounded-xl p-5 text-white/80">
            <p className="text-white/70 font-semibold mb-3">At a Glance</p>
            <ul className="text-sm text-white/60 space-y-2">
              <li className="flex justify-between"><span>{isInstructor ? "Courses Created" : "Courses Enrolled"}</span><span className="text-white">{isInstructor ? createdCoursesCount : enrolledCount}</span></li>
              <li className="flex justify-between"><span>Students (30d)</span><span className="text-white">{totalStudentsAcrossCourses}</span></li>
              <li className="flex justify-between"><span>Account</span><span className="text-white">{user.accountType}</span></li>
              <li className="flex justify-between"><span>Email</span><span className="text-white break-all">{user.email}</span></li>
            </ul>
          </div>
        </div>
        )}

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/dashboard/mycourses" className="bg-[#1a1a1a] hover:bg-[#202020] transition-colors border border-white/10 rounded-xl p-5 text-white/80">
            <p className="text-lg font-semibold">Go to My Courses</p>
            <p className="text-sm text-white/50 mt-1">Manage and view your courses</p>
          </a>
          {isInstructor && (
            <a href="/dashboard/mycourses/createcourse" className="bg-[#1a1a1a] hover:bg-[#202020] transition-colors border border-white/10 rounded-xl p-5 text-white/80">
              <p className="text-lg font-semibold">Create New Course</p>
              <p className="text-sm text-white/50 mt-1">Start building a new course</p>
            </a>
          )}
        </div>
      </div>
    )
}

export default Dashboard