import { AxiosResponse } from "axios"
import { api, APIEndpoints } from "@/shared/api"
import { GetSessionInfoDto, SignInDto, SignUpDto } from "./dto"
import { setPath } from "@/shared/lib"

const { SignIn, SignUp, SignOut, Auth, GetSessionInfo } = APIEndpoints

export const userService = {
   async signUp(dto: SignUpDto) {
      try {
         const response: AxiosResponse<void> = await api.post(setPath(Auth, SignUp), dto)
         return response.data
      } catch (error) {
         throw error
      }
   },

   async signIn(dto: SignInDto) {
      try {
         const response: AxiosResponse<void> = await api.post(setPath(Auth, SignIn), dto)
         return response.data
      } catch (error) {
         throw error
      }
   },

   async signOut() {
      try {
         const response: AxiosResponse<void> = await api.post(setPath(Auth, SignOut))
         return response.data
      } catch (error) {
         throw error
      }
   },

   async getSessionInfo() {
      try {
         const response: AxiosResponse<GetSessionInfoDto> = await api.get(
            setPath(Auth, GetSessionInfo),
         )
         return response.data
      } catch (error) {
         throw error
      }
   },
}
