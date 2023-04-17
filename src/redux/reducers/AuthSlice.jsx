import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const Login_1 = createAsyncThunk(
    'user/Login', async (User, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {

            const res = await axios.post('http://127.0.0.1:8000/api/Login', User);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);

        }
    }
)


const AuthSlice = createSlice({
    name: 'Auth',

    initialState: {
        isloding: false,
        error: null,
        token: null,
        role: null,
        message: null,
        login: JSON.parse(localStorage.getItem('login')) || false,
        connected_user:null


    },
    reducers: {
        ReducerName: (state, action) => {
            console.log(state)
        },
        logout: (state, action) => {
            
            state.token = null;
            state.role = null;
            state.message = null;
            state.login =  false;
            state.connected_user =null ;
            localStorage.setItem('login', false)
            localStorage.setItem('token', JSON.stringify(null))
            localStorage.setItem('user',JSON.stringify(null))
        },refSold :  (state, action) =>{
            localStorage.setItem('user',JSON.stringify(null)) 
        }
    },
    extraReducers: {
        [Login_1.pending]: (state) => {
            console.log('pendding...')
            state.isloding = true

        },
        [Login_1.fulfilled]: (state, { payload }) => {
            console.log('fullfiled')
            state.message = payload.message
            state.token = payload.token
            localStorage.setItem('login', payload.login)
            localStorage.setItem('token', JSON.stringify(payload.token))
            localStorage.setItem('user',JSON.stringify(payload.user))
            state.login = payload.login
            state.role = payload.user.role
            state.connected_user=payload.user 
            state.connected_user= JSON.parse( localStorage.getItem('user') )    
            state.isloding = false

        },
        [Login_1.rejected]: (state, { payload }) => {
            state.error = payload
            console.log('error')
            // console.log(state.error)
        }
    }
})
export const { logout,ReducerName } = AuthSlice.actions;
export default AuthSlice.reducer