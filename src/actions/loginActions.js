/*
 * Reducer actions related with login
 */
import * as types from "./types";

export function loginRequest(params) {
  return {
    type: types.LOGIN_REQUEST,
    params,
  };
}

export function loginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function logoutUser(response) {
  return {
    type: types.LOGOUT_USER,
  };
}

export function signUpRequest(params) {
  return {
    type: types.SIGNUP_REQUEST,
    params,
  };
}
