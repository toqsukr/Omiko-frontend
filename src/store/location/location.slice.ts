import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null,
  isLoading: false,
  userNotFound: false,
  emailExist: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});
