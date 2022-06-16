import axios from "axios"
import { API_BASE_URL } from "./ApiConstant"

export const fetchProductDetails = async (id) => await axios 
.get(`${API_BASE_URL}/products/${id}`)
.then(res => {
  return res.data
})
.catch(err=>{
  return err
})