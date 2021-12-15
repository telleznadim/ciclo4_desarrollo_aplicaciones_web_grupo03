import axios from "axios";
import {
  loginStart,
  loginFailure,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  checkUserStart,
  checkUserSuccess,
  checkUserFailure,
} from "../slices/authSlice";

axios.defaults.withCredentials = true;

export const login = async (dispatch, user) => {
  console.log("métodologin");
  dispatch(loginStart());

  try {
    const res = await axios.post(
      "https://evening-oasis-35343.herokuapp.com/auth/iniciar-sesion",
      user
    );

    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};

export const register = async (dispatch, user) => {
  console.log("métodoregister");
  dispatch(registerStart());

  try {
    const res = await axios.post(
      "https://evening-oasis-35343.herokuapp.com/auth/registro",
      user
    );
    // console.log(res.data);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    // console.log(error.response.data);
    dispatch(registerFailure(error.response.data));
  }
  //   dispatch(loginSuccess(user));
};

export const logout = async (dispatch) => {
  console.log("métodoregister");
  dispatch(logoutStart());

  try {
    const res = await axios.post(
      "https://evening-oasis-35343.herokuapp.com/auth/cerrar-sesion"
    );
    // console.log(res.data);
    dispatch(logoutSuccess(res.data));
  } catch (error) {
    // console.log(error.response.data);
    dispatch(logoutFailure(error.response.data));
  }
  //   dispatch(loginSuccess(user));
};

export const checkUser = async (dispatch) => {
  dispatch(checkUserStart());
  try {
    const res = await axios.get(
      "https://evening-oasis-35343.herokuapp.com/auth/revisar-usuario"
    );
    console.log(res.data.user);
    dispatch(checkUserSuccess(res.data.user));
  } catch (error) {
    dispatch(checkUserFailure(error.response.data));
  }
};
