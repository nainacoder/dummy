import * as types from "./loginActionTypes";

const initialState = {
  loginUser: false,
  loginUserError: false,
  loggedInUser:{}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_USERS_REQUEST:
      return {
        ...state,
        loginUser: true,
        loginUserError: false,
      };
    case types.POST_USERS_SUCCESS:
      return {
        ...state,
        loginUser: true,
        loginUserError: false,
        loggedInUser:action.payload
      };

    case types.POST_USERS_FAILURE:
      return {
        ...state,
        loginUser: false,
        loginUserError: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
