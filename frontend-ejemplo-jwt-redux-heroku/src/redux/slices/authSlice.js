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
      console.log("Login Start");
      state.isFetching = true;
      state.error.password = null;
      state.error.email = null;
    },
    loginSuccess: (state, action) => {
      console.log("Login Success");
      state.isFetching = false;
      state.error.password = null;
      state.error.email = null;
      state.currentUser = action.payload;
      //   console.log(action.payload);
    },
    loginFailure: (state, action) => {
      console.log("Login Failure");
      state.isFetching = false;
      state.error = action.payload;
      //   console.log(action.payload);
    },
    registerStart: (state) => {
      console.log("register Start");
      state.isFetching = true;
      state.error.password = null;
      state.error.email = null;
    },
    registerSuccess: (state, action) => {
      console.log("register Success");
      state.isFetching = false;
      state.error.password = null;
      state.error.email = null;
      state.currentUser = action.payload;
      //   console.log(action.payload);
    },
    registerFailure: (state, action) => {
      console.log("register Failure");
      state.isFetching = false;
      state.error = action.payload;
      //   console.log(action.payload);
    },

    logoutStart: (state) => {
      console.log("logout Start");
      state.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      console.log("logout Success");
      state.isFetching = false;
      state.error.password = null;
      state.error.email = null;
      state.currentUser = null;
      //   console.log(action.payload);
    },
    logoutFailure: (state, action) => {
      console.log("logout Failure");
      state.isFetching = false;
      state.error.password = true;
      state.error.email = true;
      state.currentUser = null;
      //   console.log(action.payload);
    },
    checkUserStart: (state) => {
      state.isCheckingUserFetching = true;
    },
    checkUserSuccess: (state, action) => {
      state.isCheckingUserFetching = false;
      state.currentUser = action.payload;
    },
    checkUserFailure: (state, action) => {
      console.log(action.payload);
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
  logoutStart,
  logoutSuccess,
  logoutFailure,
  checkUserStart,
  checkUserSuccess,
  checkUserFailure,
} = authSlice.actions;
export default authSlice.reducer;
