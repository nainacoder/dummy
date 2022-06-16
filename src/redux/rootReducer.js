import loginReducer from "./Login/loginReducer";
import productListReducer from "./ProductList/ProductListReducer";

import { combineReducers } from "redux";
import productDetailsReducer from "./ProductDetails/ProductDetailsReducer";

const rootReducer = combineReducers({
    login:loginReducer,
    productList:productListReducer,
    productDetails:productDetailsReducer,

})

export default rootReducer