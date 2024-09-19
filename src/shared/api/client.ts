import axios from "axios";
import { authStore } from "../../entities/User/model/authStore";

export const API_URL = process.env.NEXT_PUBLIC_API

export const api = axios.create({
   baseURL: API_URL,
   withCredentials: true,
})


api.interceptors.request.use((config) => {
   const token = authStore.token;
   config.headers.Authorization = `Bearer ${token}`;
   config.withCredentials = true;
   
   return config;
 });
