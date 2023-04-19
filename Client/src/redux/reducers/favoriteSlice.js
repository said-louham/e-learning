import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const GetFavorite=createAsyncThunk(
    'get/favorite', async(_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
           const res= await axios.get('http://127.0.0.1:8000/api/favorite')
          return res.data.data;
        } catch (error) {

        return rejectWithValue(error.message);  
        }
    }
)
const FavoriteSlice=createSlice({
    name:'favorite',
    initialState:{
        isloding:false,
        error:null,
        favorite:[]
    },
    extraReducers:(builder) => {
        builder
    .addCase(GetFavorite.fulfilled,(state,{payload})=>{
        state.favorite=payload
    })
     
}
})
export default FavoriteSlice.reducer