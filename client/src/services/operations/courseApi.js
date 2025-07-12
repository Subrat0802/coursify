import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { courseEndpoints } from "../apis";
import { setAllCourses } from "../../slices/courseSlice";

const {
  CREATE_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUB_SECTION_API,
  GET_ALL_COURSES_SECTION,
  ADD_COURSE_TO_STUDENT
} = courseEndpoints;

export const createCourse = async (
  title,
  description,
  whatYouWillLearn,
  price,
  thumbnailImage,
  category
) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("whatYouWillLearn", whatYouWillLearn);
    formData.append("price", price);
    formData.append("thumbnailImage", thumbnailImage);
    formData.append("category", category);
    const response = await apiConnector("POST", CREATE_COURSE_API, formData);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createSection = async (sectionName, courseId) => {
  try {
    const response = await apiConnector("POST", CREATE_SECTION_API, {
      sectionName,
      courseId,
    });
    console.log("Section Created", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const createSubSection = async (
  title,
  description,
  sectionId,
  videoUrl
) => {
  console.log(
    "title, description, sectionId, videoUrl",
    title,
    description,
    sectionId,
    videoUrl
  );
  // const toastId = toast.loading("Loading..");
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("sectionId", sectionId);
    formData.append("videoUrl", videoUrl);

    const response = await apiConnector(
      "POST",
      CREATE_SUB_SECTION_API,
      formData
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    // toast.dismiss(toastId);

    toast.success("Video uploaded successfully");

    console.log("RESPONSE SUB SECTION", response);
    return response;
  } catch (error) {
    console.log(error);
    toast.error("Failed to upload video");
  }
};

export const getAllCourses = () => {
  return async (dispatch) => {
    try {
      const response = await apiConnector("GET", GET_ALL_COURSES_SECTION);
      console.log("RESPONSE", response);
      dispatch(setAllCourses(response.data.data));
    } catch (error) {
      console.log("ERROR get all course", error);
    }
  };
};





export const studentBuyCourse = async (courseId) => {
  try {
    const response = await apiConnector("POST", ADD_COURSE_TO_STUDENT, { courseId });
    console.log("RESPONSE BUY COURSE", response);

    if (!response?.data?.success) {
      throw new Error(response?.data?.message || "Unknown error");
    }

    toast.success(response.data.message);
    return response.data;
  } catch (error) {
    console.error("ERROR BUY COURSE", error);

    const errorMessage =
      error?.response?.data?.message || error.message || "Something went wrong";

    toast.error(errorMessage);
    throw new Error(errorMessage); // re-throw if you want to handle it further upstream
  }
};
