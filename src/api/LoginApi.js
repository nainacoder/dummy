import axios from "axios";
 import { API_BASE_URL } from "./ApiConstant";
export const postLogin = async (data) =>
  await axios
    // .post('https://dummyjson.com/auth/login', data, {
    .post(`${API_BASE_URL}/auth/login`, data, {
      headers: { "Content-Type": "application/json" },
    })

    .then((res) => {
      return res.data;
      //    console.log(res.data)
    })
    .catch((err) => {
      console.log(err);
    });


    
   