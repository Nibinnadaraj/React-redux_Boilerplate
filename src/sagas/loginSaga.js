/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from "redux-saga/effects";
import loginUser from '../api/methods/loginUser';
import signUpUser from '../api/methods/signUpUser';
import * as loadingActions from "../actions/loadingActions";
import * as loginActions from "../actions/loginActions";

// Our worker Saga that logins the user
export  function* loginAsync(action) {

  yield put(loadingActions.enableLoader());
  const response = yield call(loginUser, action.params);

  if(response[0] == 404){
    alert('hi')
  }

  // if (response.ack ===  "success") {
  //   yield put(loginActions.loginResponse(response.data));
  //   yield put(loadingActions.disableLoader());
  // } else {
  //   yield put(loadingActions.disableLoader());
  // }
}

export  function* signUpAsync(action) {

  yield put(loadingActions.enableLoader());

  //how to call api
  const response = yield call(signUpUser, action.params);
  //mock response
  //const response = { status: true};
  console.log(response)

  if (response.ack ===  "success") {

  
  } else {
    yield put(loadingActions.disableLoader());
    
  }
}


