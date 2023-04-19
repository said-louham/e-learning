import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const Users=createAsyncThunk(
    'get/Users', async(_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
            const res= await axios.get('http://127.0.0.1:8000/api/users') 
            return res.data.data;
        } catch (error) {
        return rejectWithValue(error.message);  
        }
    }
)


export const UpdateUser=createAsyncThunk(
    'get/User', async({id,newUser},thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
            const res= await axios.post('http://127.0.0.1:8000/api/users/'+id,newUser) 
            return res.data;
        } catch (error) {
        return rejectWithValue(error.message);  
        }
    }
  )

const UsersSlice=createSlice({
    name:'Users',
    initialState:{
        isloding:false,
        error:null,
        users:[],
    },

    extraReducers:(builder) => {
        builder
       .addCase(Users.pending,(state)=>{
        state.isloding=true
    })
    .addCase(Users.fulfilled,(state,{payload})=>{
            state.users=payload
    })

    .addCase(UpdateUser.fulfilled,(state,{payload})=>{
        console.log('payload',payload)
        if(payload.user){
            console.log(payload.user)
            localStorage.setItem('user',JSON.stringify(payload.user))
         }
      })
}
})
export default UsersSlice.reducer