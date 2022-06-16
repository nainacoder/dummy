import * as types from "./ProductListActionTypes";

const initialState = {
  fetchProduct: false,
  lists: [],
  fetchProductError: false,
};

 const productListReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      console.log(action.payload)
      return {
        ...state,
        fetchProduct: true,
        fetchProductError: false,
      };
      case types.FETCH_PRODUCT_SUCCESS:
        console.log(action.payload)
        return{
          ...state,
            fetchProduct:false,
            lists:action.payload,
            fetchProductError:false
        }
        case types.FETCH_PRODUCT_FAILURE:
            return{
              ...state,
                fetchProduct:false,
               
                fetchProductError:true
            }

    default:
      return state;
  }
};
export default productListReducer