import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: null
}
const categorySlice = createSlice({
    name:"category",
    initialState:initialState,
    reducers:{
        setCategory(state, value ){
            state.categories = value.payload
        }
    }
})

export const {setCategory} = categorySlice.actions;
export default categorySlice.reducer;