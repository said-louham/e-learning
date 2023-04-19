import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const GetCourses=createAsyncThunk(
    'get/Courses', async(_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
           const res= await axios.get('http://127.0.0.1:8000/api/course')
          return res.data.data;
        } catch (error) {

        return rejectWithValue(error.message);  
        }
    }
)




const CoursesSlice=createSlice({
    name:'courses',
    initialState:{
        isloding:false,
        error:null,
        Courses:[]
    },

    extraReducers:(builder) => {
        builder
    .addCase(GetCourses.fulfilled,(state,{payload})=>{
        state.Courses=payload
    })
 
}
})
export default CoursesSlice.reducer