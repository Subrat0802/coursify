import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie";

const tokenCook = Cookies.get("token");

const initialState = {
    token: tokenCook ? tokenCook : null,
    userData: null,
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
        }
    }
})

export const {setToken, setLoading, setUserData} = authSlice.actions;
export default authSlice.reducer;