import { apiConnector } from "../apiConnector";
import { courseEndpoints } from "../apis";

const { CREATE_COURSE_API, CREATE_SECTION_API } = courseEndpoints;

export const createCourse = async (
  title,
  description,
  whatYouWillLearn,
  price,
  thumbnailImage,
  category,
) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description)
    formData.append("whatYouWillLearn", whatYouWillLearn)
    formData.append("price", price)
    formData.append("thumbnailImage", thumbnailImage)
    formData.append("category", category)
    const response = await apiConnector("POST", CREATE_COURSE_API, formData, {
      "Content-Type": "multipart/form-data" 
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};


export const createSection = async (sectionName, courseId) => {
  try{
    const response = await apiConnector("POST", CREATE_SECTION_API, {sectionName, courseId});
    console.log("Section Created", response);
    return response;
  }catch(error){
    console.log(error);
  }
}