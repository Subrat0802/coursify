import Template from "../components/auth/Template";
import signupImg from "../assets/Images/signup.webp"

const Signup = () => {
  return (
    <Template
      type="signup"
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
    />
  );
};

export default Signup;
