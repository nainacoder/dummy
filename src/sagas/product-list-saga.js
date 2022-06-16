import { put, takeLatest, call } from "redux-saga/effects";
import { fetchProductList } from "../api/ProductListApi";
import {
  fetchProductSuccess,
  fetchProductFailure,
} from "../redux/ProductList/ProductListAction";

function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProductList);
   yield put(fetchProductSuccess(products))
    console.log("productList", products);
  } catch (error) {
    yield put(fetchProductFailure(error));
  }
}

export function* fetchProducts() {
  yield takeLatest("FETCH_PRODUCT_REQUEST", fetchProductsSaga);
}
