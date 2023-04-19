import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const GetUsers=createAsyncThunk(
    'get/users', async(_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
           const res= await axios.get('http://127.0.0.1:8000/api/users')
          return res.data.data;
        } catch (error) {

        return rejectWithValue(error.message);  
        }
    }
)
const UsersSlice=createSlice({
    name:'users',
    initialState:{
        isloding:false,
        error:null,
        users:[]
    },

    extraReducers:(builder) => {
        builder
    .addCase(GetUsers.fulfilled,(state,{payload})=>{
        state.users=payload
    })
    
}
})
export default UsersSlice.reducer