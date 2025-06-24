import InputTag from "../ui/InputTag";
import Button from "../ui/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../../services/operations/authApi";

const SigninForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [signinData, setSignInData] = useState({
    email: "",
    password: "",
  });

  console.log("signinData", signinData);

  const {email, password} = signinData;

  const handleOnChange = (e) => {
    setSignInData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(signin(email, password, navigate))
    console.log("SIGNIN>>FRONTEND", res);
  };

  return (
    <div className="w-full flex flex-col gap-2 ">
      <form
        onSubmit={handleSubmit}
        autocomplete="off"
        className="flex flex-col gap-4 w-[80%]"
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
        <input type="submit" text="login" />
        {/* <Button onClick={handleSubmit} text={"Sign In"} type={"primary"} /> */}
      </form>
    </div>
  );
};

export default SigninForm;
