import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const AddRate=createAsyncThunk(
    'add/Rate', async(rate,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
           const res= await axios.post('http://127.0.0.1:8000/api/ratings',rate)
          return res.data.rate;
        } catch (error) {
        return rejectWithValue(error.message);  
        }
    }
)


export const getRates=createAsyncThunk(
    'get/Rates', async(_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
           const res= await axios.get('http://127.0.0.1:8000/api/ratings')
          return res.data.data;
        } catch (error) {
        return rejectWithValue(error.message);  
        }
    }
)


const RateSlice=createSlice({
    name:'Rate',
    initialState:{
        isloding:false,
        error:null,
        Rate:[],
        single_rate:null
    },
    reducers:{
        get_user_rate:(state,{payload})=>{
            // console.log('get single rate payload',payload)
           state.single_rate=state.Rate.find(item=>item.user_id==payload.user_id && item.course_id==payload.course_id)
        }
    },

    extraReducers:(builder) => {
        builder
        .addCase(AddRate.pending,(state)=>{
            // console.log('pending rate');
        })   
        .addCase(AddRate.fulfilled,(state,{payload})=>{
            // console.log('rating added ',payload.course_id);
            const item=state.Rate.find(item=>
                item.user_id==payload.user_id && 
                item.course_id==payload.course_id)
        if(item){
            const {rate,course_id,user_id}=payload
            state.Rate=[...state.Rate.filter(item=>!(item.user_id===payload.user_id &&
                  item.course_id===payload.course_id)),{rate,user_id,course_id}]
                // item.user_id!=payload.user_id && item.course_id!=payload.course_id)
                // state.Rate.push({rate,user_id,course_id})
                // state.Rate=[...state.Rate,{rate,user_id,course_id}]
        }else{
            const {rate,course_id,user_id}=payload
            state.Rate.push({rate,user_id,course_id})
        }

        //  state.Rate.find(item=>item.user_id==payload.user_id && item.course_id==payload.course_id)
            
        })  
        .addCase(getRates.fulfilled,(state,{payload})=>{
            state.Rate=payload
        })  



}

})
export default RateSlice.reducer
export const {get_user_rate}=RateSlice.actions;
