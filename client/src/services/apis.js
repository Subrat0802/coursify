const BASE_URL = "http://localhost:3000/api/v1";


export const endpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    SIGNIN_API: BASE_URL + "/auth/signin",
    GETUSER_API: BASE_URL + "/auth/getUser",
}

export const categoryEndpoints = {
    CREATE_CATEGORY_API: BASE_URL + "/category/createCategory",
    GET_ALL_CATEGORY_API: BASE_URL + "/category/getAllCategory" 
}


export const courseEndpoints = {
    CREATE_COURSE_API: BASE_URL + "/course/createCourse", 
    CREATE_SECTION_API: BASE_URL + "/course/createSection",
    CREATE_SUB_SECTION_API: BASE_URL + "/course/createSubSection",
    GET_ALL_COURSES_SECTION: BASE_URL + "/course/allCourses",
    ADD_COURSE_TO_STUDENT: BASE_URL + "/course/addCourseToStudentAccount", //makeCoursePublished
    MAKE_COURSE_PUBLISHED: BASE_URL + "/course/makeCoursePublished"
}