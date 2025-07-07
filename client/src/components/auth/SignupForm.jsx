import React, { useState } from "react";
import InputTag from "../ui/InputTag";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../services/operations/authApi";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [role, setRole] = useState("Instructor");
  const handleSetRole = (e) => {
    setRole(e.target.innerText);
  };

  const loading = useSelector((state) => state.loading);

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number:"",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const { firstname, lastname, email, number, password, confirmPassword } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signup(
        role,
        firstname,
        lastname,
        email,
        number,
        password,
        confirmPassword,
        navigate
      )
    );

  };

  return (
    <>
      {loading ? (
        <p className="p-20">Loading...</p>
      ) : (
        <div className="w-full flex flex-col gap-2">
          <div className="flex gap-4 border-b-2 border-white/10 p-1 font-semibold px-1
           rounded-full mb-4 bg-[#1c1c1c] w-fit ">
            <div
              onClick={(e) => handleSetRole(e)}
              className={` cursor-pointer  text-white/70 py-2 px-4 rounded-full ${
                role == "Instructor" && "bg-[#0F0F0F]  border-white/10"
              }`}
            >
              Instructor
            </div>
            <div
              onClick={(e) => handleSetRole(e)}
              className={`cursor-pointer  text-white/70 py-2 px-4 rounded-full ${
                role == "Student" && "bg-[#0F0F0F]  flex justify-center items-center"
              }`}
            >
              Student
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-4 md:w-[80%]"
          >
            <div className="flex justify-between  gap-2">
              <InputTag
                className="w-[50%]  "
                placeholder={"First Name"}
                type={"text"}
                value={firstname}
                name="firstname"
                onChange={(e) => handleChange(e)}
              />
              <InputTag
                className="w-[50%]"
                placeholder={"last Name"}
                type={"text"}
                value={lastname}
                name="lastname"
                onChange={(e) => handleChange(e)}
              />
            </div>

            <InputTag
              placeholder={"Email Address"}
              type={"email"}
              value={email}
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <InputTag
              placeholder={"Phone Number"}
              type={"text"}
              name="number"
              value={number}
              onChange={(e) => handleChange(e)}
            />

            <div className=" flex justify-between gap-2">
              <InputTag
                className="w-[50%]"
                placeholder={"Password"}
                type={"password"}
                value={password}
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <InputTag
                className="w-[50%]"
                placeholder={"Confirm Password"}
                type={"password"}
                value={confirmPassword}
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* <input type="submit" text="signup" /> */}
            <Button text={"Sign Up"} type={"submit"} btn={"primary"}/>
            <div className="text-center">
              <Link to={"/signin"}><p className="group cursor-pointer">Already have an account? <span className="group-hover:text-blue-800">Signin</span></p></Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignupForm;
