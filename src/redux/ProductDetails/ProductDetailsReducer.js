import * as types from "./ProductDetailsActionTypes"

const initialState = {
    fetchingDetails : false,
    details:{},
    fetchingDetailsError:false
}

const productDetailsReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.PRODUCT_DETAILS_FETCHING_REQUEST:
            return{
                ...state,
                fetchingDetails:true,

            }
            case types.PRODUCT_DETAILS_FETCHING_SUCCESS:
                return{
                    ...state,fetchingDetails:false,
                    details:action.payload
                }

                case types.PRODUCT_DETAILS_FETCHING_FAILURE:
                    return{
                        ...state,
                        fetchingDetails:false,
                        details:action.payload,
                        fetchingDetailsError:true
                    }
            default: return state
    }
}

export default productDetailsReducer