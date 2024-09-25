import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API

export const api = axios.create({
   baseURL: API_URL,
   withCredentials: true,
})


api.interceptors.request.use((config) => {
   const token = localStorage.getItem("token") || ""
   config.headers.Authorization = `Bearer ${token}`;
   config.withCredentials = true;
   
   return config;
 });
