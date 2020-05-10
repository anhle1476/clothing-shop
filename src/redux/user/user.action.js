import { types } from "../action-type";

export const googleSignInStart = () => ({
  type: types.user.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: types.user.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: types.user.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: types.user.SIGN_IN_FAILURE,
  payload: error,
});
export const signOutStart = () => ({
  type: types.user.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: types.user.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: types.user.SIGN_OUT_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: types.user.CHECK_USER_SESSION,
});

export const signUpStart = (signUpData) => ({
  type: types.user.SIGN_UP_START,
  payload: signUpData,
});

export const signUpSuccess = (userAndDisplayName) => ({
  type: types.user.SIGN_UP_SUCCESS,
  payload: userAndDisplayName,
});

export const signUpFailure = (error) => ({
  type: types.user.SIGN_UP_FAILURE,
  payload: error,
});
