import * as types from "./ProductListActionTypes"


export const fetchProductRequest = () =>{
    return{
        type:types.FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = (products) =>{
    console.log("products action",products)
    return{
        type:types.FETCH_PRODUCT_SUCCESS,
        payload:products
    }
}

export const fetchProductFailure = (err) => {
    return{
        type:types.FETCH_PRODUCT_FAILURE,
        payload:err
    }
}