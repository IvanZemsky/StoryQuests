import { AxiosResponse } from "axios";
import { api, APIEndpoints, IUserLogin } from "@/src/shared/api";

const { Login, Auth } = APIEndpoints;

class UserService {
   async login(loginData: IUserLogin): Promise<{ token: string }> {
      try {
         const response: AxiosResponse<{ token: string }> = await api.post(Auth + Login, loginData);
         return response.data;
      } catch (error) {
         throw error;
      }
   }
}

export const userService = new UserService();
