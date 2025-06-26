import React, { useState } from "react";
import InputTag from "../ui/InputTag";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../services/operations/authApi";
import { useNavigate } from "react-router-dom";

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
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const { firstname, lastname, email, password, confirmPassword } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signup(
        role,
        firstname,
        lastname,
        email,
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
          <div className="flex gap-4 mb-4">
            <div
              onClick={(e) => handleSetRole(e)}
              className={`border cursor-pointer border-white/10 text-white/70 py-2 px-4 rounded-full ${
                role == "Instructor" && "bg-gray-900"
              }`}
            >
              Instructor
            </div>
            <div
              onClick={(e) => handleSetRole(e)}
              className={`border cursor-pointer border-white/10 text-white/70 py-2 px-4 rounded-full ${
                role == "Student" && "bg-gray-900"
              }`}
            >
              Student
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-4 w-[80%]"
          >
            <div className="flex justify-between gap-2">
              <InputTag
                className="w-[50%]"
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
            {/* <InputTag
              placeholder={"Phone Number"}
              type={"text"}
              name="number"
            /> */}

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
          </form>
        </div>
      )}
    </>
  );
};

export default SignupForm;
