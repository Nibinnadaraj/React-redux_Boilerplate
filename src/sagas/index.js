/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as loginSaga from './loginSaga';


export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginSaga.loginAsync)]);
    yield all([takeEvery(types.SIGNUP_REQUEST, loginSaga.signUpAsync)]);

}
