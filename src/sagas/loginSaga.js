import { put, takeLatest, call } from "redux-saga/effects";

import { postLogin } from "../api/LoginApi";
import { postUsersSuccess, postUsersFailure } from "../redux/Login/loginAction";

function* postLoginSaga(action) {
  console.log("second");
  console.log(action);

  try {
    const payload = yield call(postLogin, action.payload);
    console.log("payload",payload);
    yield put(postUsersSuccess(payload));
  } catch (error) {
    yield put(postUsersFailure(error));
  }
}

export function* userLogin() {
  yield takeLatest("POST_USERS_REQUEST", postLoginSaga);
  console.log("first");
}
