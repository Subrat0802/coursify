import Template from '../components/auth/Template'
import signinImg from "../assets/Images/login.webp"

const Signin = () => {
  return (
    <Template
      type="signin"
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signinImg}
    />
  )
}

export default Signin