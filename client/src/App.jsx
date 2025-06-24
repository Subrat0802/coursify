import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dasboard from "./pages/Dasboard";
import Cookies from "js-cookie";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setToken } from "./slices/authSlice";

function App() {
  
  return (
    <div className="min-h-[100vh] bg-[#0f0f0f]">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dasboard />} />
      </Routes>
    </div>
  );
}

export default App;
