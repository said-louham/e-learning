import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getSearche=createAsyncThunk(
    'get/search', async(term,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
           const res= await axios.post('http://127.0.0.1:8000/api/search',term)
        //    console.log('search',res.data.courses)
          return res.data.courses;
        } catch (error) {
        return rejectWithValue(error.message);  
        }
    }
)


const SearchSlice=createSlice({
    name:'search',
    initialState:{
        isloding:false,
        error:null,
        search_list:[]
    },

    extraReducers:(builder) => {
        builder
    .addCase(getSearche.fulfilled,(state,{payload})=>{
        state.search_list=payload
    })   
    .addCase(getSearche.pending,(state,{payload})=>{
        console.log('pending search');
    })   
}
// extraReducers:{
//    [getSearche.fulfilled]:(state,{payload})=>{
//         console.warn('fulfiled');
//    },
//    [getSearche.pending]:(state,{payload})=>{
//         console.warn('pendding');
//    }
// }
})
export default SearchSlice.reducer