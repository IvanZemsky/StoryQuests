import { AxiosResponse } from "axios";
import { api, APIEndpoints, IUserLogin } from "@/shared/api";

const { Login, Auth, CheckAuth} = APIEndpoints;

class UserService {
   async login(loginData: IUserLogin): Promise<{ token: string }> {
      try {
         const response: AxiosResponse<{ token: string }> = await api.post(Auth + Login, loginData);
         return response.data;
      } catch (error) {
         throw error;
      }
   }

   async checkAuth(): Promise<Boolean> {
      try {
         const response: AxiosResponse<{message: string}>  = await api.get(Auth + CheckAuth)
         if (response.status === 200) {
            return true
         } else {
            return false
         }
      } catch (error) {
         throw (error)
      }
   }
}

export const userService = new UserService();
