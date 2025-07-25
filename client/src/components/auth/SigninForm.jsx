import InputTag from "../ui/InputTag";
import Button from "../ui/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../services/operations/authApi";

const SigninForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [signinData, setSignInData] = useState({
    email: "",
    password: "",
  });


  const {email, password} = signinData;

  const handleOnChange = (e) => {
    setSignInData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password, navigate))
  };

  return (
    <div className="w-full flex flex-col gap-2 ">
      <form
        onSubmit={handleSubmit}
        autocomplete="off"
        className="flex flex-col gap-4 md:w-[80%]"
      >
        <InputTag
          placeholder={"Email Address"}
          type={"email"}
          name="email"
          value={email}
          onChange={handleOnChange}
        />
        <InputTag
          placeholder={"Password"}
          type={"password"}
          name="password"
          value={password}
          onChange={handleOnChange}
        />
        {/* <input type="submit" text="login" /> */}
        <Button onClick={handleSubmit} text={"Sign In"} btn={"primary"} type={"submit"} />
        <div className="text-center">
              <Link to={"/signup"}><p className="group cursor-pointer">Don't have account? <span className="group-hover:text-blue-900">Signup</span></p></Link>
            </div>
      </form>
    </div>
  );
};

export default SigninForm;
