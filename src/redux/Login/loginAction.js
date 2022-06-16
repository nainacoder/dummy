import * as types from "./loginActionTypes"


export const postUsersRequest = (data) =>{
   return{
            type:types.POST_USERS_REQUEST,
            payload:data
        }
    
}

export const postUsersSuccess = (users) =>{
    console.log("action file",users)

return{
        type:types.POST_USERS_SUCCESS,
        payload:users
    }
  
}

export const postUsersFailure = (error) =>{
  return{
        type:types.POST_USERS_FAILURE,
        payload:error
    }
   
}