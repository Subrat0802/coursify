import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    courseId: null,
    allCourses: null
}

const courseSlice = createSlice({
    name:"course",
    initialState:initialState,
    reducers: {
        setCourseId(state, value){
            state.courseId = value.payload;
        },
        setAllCourses(state, value){
            state.allCourses = value.payload;
        }
    }
})

export const {setCourseId, setAllCourses} = courseSlice.actions;
export default courseSlice.reducer;