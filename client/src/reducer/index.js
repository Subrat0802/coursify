import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import categoryReducer from "../slices/categorySlice";
import courseReducer from "../slices/courseSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    course: courseReducer
})

export default rootReducer;