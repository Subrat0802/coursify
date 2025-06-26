import { apiConnector } from "../apiConnector";
import { categoryEndpoints } from "../apis";

const { CREATE_CATEGORY_API, GET_ALL_CATEGORY_API } = categoryEndpoints;

export const getCategory = async () => {
  try {
    const response = await apiConnector("GET", GET_ALL_CATEGORY_API);

    if (!response) {
      throw new Error("Error while getting all categories");
    }
    
    console.log("CAT resposne.", response.data.success);
    return response
  } catch (error) {
    console.log("ERROR while getting categories", error);
  }
};
