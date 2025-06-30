import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie";
import { getUser } from "../services/operations/authApi";

const tokenCook = Cookies.get("token");

const data = await getUser();
console.log("data from slice auth", data);

const initialState = {
    token: tokenCook ? tokenCook : null,
    userData: data ? data : null,
    userForCourseForm: null,
    loading: false
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state, value){
            state.token = value.payload
        },
        setUserData(state, value) {
            state.userData = value.payload
        },
        setLoading(state, value){
            state.loading = value.payload
        },
        setUserForFormData(state, value) {
            state.userForCourseForm = value.payload
        }
    }
})

export const {setToken, setLoading, setUserData, setUserForFormData} = authSlice.actions;
export default authSlice.reducer;