import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    isFetching: false,
    isCheckingUserFetching: false,
    error: { password: null, email: null },
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error.password = null;
      state.error.email = null;
    },
    loginSuccess: (state, action) => {
      console.log(action.payload);
      state.isFetching = false;
      state.error.password = null;
      state.error.email = null;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = action.payload;
    },
    registerStart: (state) => {
      state.isFetching = true;
      state.error.password = null;
      state.error.email = null;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.error.password = null;
      state.error.email = null;
      state.currentUser = action.payload;
    },
    registerFailure: (state, action) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = action.payload;
    },
    logoutStart: (state) => {
      state.isFetching = true;
      state.error.password = null;
      state.error.email = null;
    },
    logoutSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error.password = null;
      state.error.email = null;
    },
    logoutFailure: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error.password = true;
      state.error.email = true;
    },
    checkUserStart: (state) => {
      state.isCheckingUserFetching = true;
    },
    checkUserSuccess: (state, action) => {
      state.isCheckingUserFetching = false;
      state.currentUser = action.payload;
    },
    checkUserFailure: (state) => {
      state.isCheckingUserFetching = false;
      state.currentUser = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutFailure,
  logoutStart,
  logoutSuccess,
  checkUserStart,
  checkUserSuccess,
  checkUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
