import logo from '../../imgs/images.jpg'
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  User1: {
    fullName: 'raja Elghazi',
    email: 'rajaElghazi@gmail.com',
    password: '123',
    phoneNumber: '',
    Adresse: '',
    gender: 'Women',
    imgUrl: logo,
  },
};

const dbSlice = createSlice({
  name: 'db',
  initialState,
  reducers: {
    update: (state, action) => {
      state.User1 = action.payload;
    },
    changePass: (state, action) => {
      state.User1.password = action.payload;
    },
  },
});

export const { update, changePass } = dbSlice.actions;

export default dbSlice.reducer;