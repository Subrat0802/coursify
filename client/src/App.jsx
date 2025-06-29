import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dasboard from "./pages/DasboardLayout";
import Cookies from "js-cookie";
import ProtectedRoute from "./components/auth/ProtectedROute";
import MyProfile from "./components/dashboard/MyProfile";
import DasboardLayout from "./pages/DasboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import MyCourses from "./components/dashboard/MyCourses";
import Settings from "./components/dashboard/Settings";
import CreateCourse from "./components/dashboard/myCoursesComp/CreateCourse";
import UserCourses from "./components/dashboard/myCoursesComp/UserCourses";
function App() {
  return (
    <div className="min-h-[100vh] bg-[#0f0f0f]">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DasboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<MyProfile />} />
          <Route 
            path="mycourses" 
            element={
                <MyCourses />
              }
          >
              <Route index element={<UserCourses />}/>
              <Route path="createcourse" element={<CreateCourse />}/>
          </Route>
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
