import { put, takeLatest, call } from "redux-saga/effects";
import { fetchProductDetails } from "../api/ProductDetailsApi";

import {
  productDetailsFetchingSuccess,
  productDetailsFetchingFailure,
} from "../redux/ProductDetails/ProductDetailsAction";

function* fetchProductDetailsSaga(detail) {
  console.log(detail)
  try {
    const data = yield call(fetchProductDetails,detail.payload);
   
    yield put(productDetailsFetchingSuccess(data));
    console.log("productDetails", data);
  } catch (error) {
    yield put(productDetailsFetchingFailure(error));
  }
}

export function* productDetailsSaga() {
  yield takeLatest("PRODUCT_DETAILS_FETCHING_REQUEST", fetchProductDetailsSaga);
}
