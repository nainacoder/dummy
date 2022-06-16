import axios from "axios"
import { API_BASE_URL } from "./ApiConstant"

export const fetchProductList = async () => await axios 
    // .get('https://dummyjson.com/products')
    .get(`${API_BASE_URL}/products`)
    .then(res =>{
        return res.data.products
    })
    .catch(err=>{
        return err
    })
