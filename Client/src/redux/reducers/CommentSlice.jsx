import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const getComments=createAsyncThunk(
    'get/comments', async(id,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
            const res= await axios.get('http://127.0.0.1:8000/api/comment/'+id) 

            return res.data.data;
        } catch (error) {
        return rejectWithValue(error.message);  
        }
    }
)

export const DeleteComment=createAsyncThunk(
    'delete/comment', async(item,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
                 const res= await axios.delete('http://127.0.0.1:8000/api/comment/'+item.id)
                //  console.log('dataaaaaa',item);
                 return item; 

        } catch (error) {
        return rejectWithValue(error.message);
        }
    },
)



export const AddComment=createAsyncThunk(
    'add/comments', async(data,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
            const res= await axios.post('http://127.0.0.1:8000/api/comment',data) 
          return res.data;
        } catch (error) {
        return rejectWithValue(error.message);  
        }
    }
)
export const getcomment=createAsyncThunk(
    'get/comment', async(id,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {

           const res= await axios.get('http://127.0.0.1:8000/api/comment/'+id)
          return res.data.data;
        } catch (error) {
        return rejectWithValue(error.message);  
        }
    }
)


export const Courses=createAsyncThunk(
    'Courses/comment', async(_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try {
           const res= await axios.get('http://127.0.0.1:8000/api/course')
          return res.data.data;
        } catch (error) {
        return rejectWithValue(error.message);  
        }
    }
)



 const CommentsSlice=createSlice({
    name:'comment',
    initialState:{
        isloding:false,
        error:null,
        message:null,
        comments:[],
        single_comment:[],
        user:null
    },
    reducers:{
        ReducerName:(state,action)=>{
            console.log(state)
        }
    },
    extraReducers:(builder) => {
        builder
       .addCase(getComments.pending,(state)=>{
        state.isloding=true
    })
    .addCase(getComments.fulfilled,(state,{payload})=>{
    state.comments=payload.comments
    })

  .addCase(DeleteComment.pending,(state)=>{
        console.log('pendding...')
        state.isloding=true
    })
 
    .addCase(DeleteComment.rejected,(state,{payload})=>{
        state.error=payload
        console.log('error')
    })
    .addCase(DeleteComment.fulfilled,(state,{payload})=>{
        console.log('fullfiled delete ')
        console.log('payload',payload.id)
        state.comments=state.comments.filter(elm=>elm.id!=payload.id)
    })
    // -------------------------------------------
    .addCase(AddComment.fulfilled,(state,{payload})=>{
                   console.log('add  comment fullfiled',payload.comment)
                   state.comments.push(payload.comment)
                   state.user=payload.user
           })    
    .addCase(getcomment.fulfilled,(state,{payload})=>{
        state.single_comment.push(payload)
    })    

    .addCase(Courses.fulfilled,(state,{payload})=>{
        state.AllCourses=payload
        console.log('all from fullfild courses',state.Courses)
    })

    }
})
export const {ReducerName}=CommentsSlice.actions;
export default CommentsSlice.reducer