import toast from "react-hot-toast";
import { setLoading, setToken, setUserData } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";

const { SIGNUP_API, SIGNIN_API, GETUSER_API } = endpoints;

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

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setUserData(response.data.response));
      toast.dismiss(toastId);

      navigate("/signin"); // optionally pass path like navigate("/dashboard")
      toast.success(response.data.message);
    } catch (error) {
      console.log("ERROR while signup", error);
      alert(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const signin = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Loaidng...");
    try {
      const response = await apiConnector("POST", SIGNIN_API, {
        email,
        password,
      });

      // console.log("SIGNIN RESPONSE..........", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // dispatch(setUserData(response.data.user));
      dispatch(setToken(response.data.user.token));

      const userData = await getUser();

      dispatch(setUserData(userData));

      toast.dismiss(toastId);
      toast.success(response.data.message);
      navigate("/dashboard"); // optionally pass path like navigate("/dashboard")
      
    } catch (error) {
      console.log("ERROR while signin", error);
      toast.dismiss(toastId);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getUser = async () => {
  try {
      const response = await apiConnector("GET", GETUSER_API);
      console.log("RESSSSSSSSSSSS....", response);
      return response.data.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.error("ERROR while get user", error);
      return null;
    }
};


