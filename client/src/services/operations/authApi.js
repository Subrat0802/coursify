import toast from "react-hot-toast";
import { setLoading, setToken, setUserData } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { SIGNUP_API, SIGNIN_API } = endpoints;

export const signup = (
  accountType,
  firstname,
  lastname,
  email,
  password,
  confirmPassword,
  navigate
) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Loaidng...");
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
      });

      console.log("SIGNUP RESPONSE..........", response);

      if(!response.data.success){
        throw new Error(response.data.message); 
      }

      dispatch(setUserData(response.data.response));  
      toast.dismiss(toastId);    

      navigate("/signin"); // optionally pass path like navigate("/dashboard")
      toast.success(response.data.message)
    } catch (error) {
      console.log("ERROR while signup", error);
      alert(error.response.data.message)
    } finally {
      dispatch(setLoading(false));
    }
  };
};




export const signin = (
  email,
  password,
  navigate
) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Loaidng...");
    try {
      const response = await apiConnector("POST", SIGNIN_API, {
        email,
        password,
      });

      console.log("SIGNIN RESPONSE..........", response);

      if(!response.data.success){
        throw new Error(response.data.message); 
      }

      dispatch(setUserData(response.data.user));
      dispatch(setToken(response.data.user.token))  
    
      toast.dismiss(toastId);    

      navigate("/dashboard"); // optionally pass path like navigate("/dashboard")
      toast.success(response.data.message)
    } catch (error) {
      console.log("ERROR while signin", error);
      alert(error.response.data.message)
    } finally {
      dispatch(setLoading(false));
    }
  };
};
