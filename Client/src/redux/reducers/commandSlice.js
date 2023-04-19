import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const GetCommand=createAsyncThunk(
    'get/Command', async(_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
           const res= await axios.get('http://127.0.0.1:8000/api/Command')
          return res.data.data;
        } catch (error) {

        return rejectWithValue(error.message);  
        }
    }
)
const CommandSlice=createSlice({
    name:'Command',
    initialState:{
        isloding:false,
        error:null,
        commands:[]
    },
    extraReducers:(builder) => {
        builder
    .addCase(GetCommand.fulfilled,(state,{payload})=>{
        state.commands=payload
    })
     
}
})
export default CommandSlice.reducer