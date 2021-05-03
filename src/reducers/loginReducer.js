/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  id: -1,
  name:"",
  email:"",
  phone: "",
  image: "",
  key:"",
};

export const loginReducer = createReducer(initialState, {

  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.params.username,
    };
  },

  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      // id: action.response.user_id,
      // name: action.response.user_name,
      // email: action.response.user_email,
      // phone: action.response.user_phone,
      // image: action.response.user_image,
      // key: action.response.key,
      isLoggedIn:true
    };
  },
  [types.LOGOUT_USER](state, action) {
    return {
      ...state,
      id: -1,
      name: "",
      email: "",
      phone: "",
      image: "",
      key: "",
      isLoggedIn:false
    };
  },

});
