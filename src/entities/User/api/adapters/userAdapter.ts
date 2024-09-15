import { IApiUser } from "../types";

export const userAdapter = (user: IApiUser) => {
   return {
      id: user._id,
      login: user.login,
   }
}