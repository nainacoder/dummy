import * as types from "./ProductDetailsActionTypes"


export const productDetailsFetchingRequest = (id) => {
    return {
        type:types.PRODUCT_DETAILS_FETCHING_REQUEST,
        payload:id
    }
}

export const productDetailsFetchingSuccess = (data) =>{
    return{
        type:types.PRODUCT_DETAILS_FETCHING_SUCCESS,
        payload:data
        
    }
}

export const productDetailsFetchingFailure = (error) => {
    return{
        type:types.PRODUCT_DETAILS_FETCHING_FAILURE,
        payload:error
    }
}