import { all, fork } from "redux-saga/effects";

import { userLogin } from "./loginSaga";
import { fetchProducts } from "./product-list-saga";
import { productDetailsSaga } from "./product-details-saga";

const sagas = [fork(userLogin), fork(fetchProducts), fork(productDetailsSaga)];

export default function* rootSaga() {
  yield all(sagas);
}
