import axios from "axios";
import { authStore } from "../model/authStore";

export const API_URL = process.env.NEXT_PUBLIC_API

export const api = axios.create({
   baseURL: API_URL,
})


api.interceptors.request.use((config) => {
   const token = authStore.token;
   if (token) {
     config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
 });
