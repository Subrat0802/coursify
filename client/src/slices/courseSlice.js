import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    courseId: null,
}

const courseSlice = createSlice({
    name:"course",
    initialState:initialState,
    reducers: {
        setCourseId(state, value){
            state.courseId = value.payload;
        }
    }
})

export const {setCourseId} = courseSlice.actions;
export default courseSlice.reducer;