import axios from "axios";
import { API_URL } from "./config";

export const api = axios.create({
   baseURL: API_URL,
   // withCredentials: true,
})

// const token = localStorage.getItem('token')

// api.interceptors.request.use(config => {
//    config.headers.Authorization = `Brarer ${token}`
//    return config
// })