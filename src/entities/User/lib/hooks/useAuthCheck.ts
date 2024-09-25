import { useQuery } from "@tanstack/react-query"
import { authStore } from "../../model/authStore"
import { userService } from "../../api/service"

const queryFn = async () => {
   try {
      const response = await userService.checkAuth()
      return response
   } catch (error) {
      authStore.logout()
      throw error
   }
}

export const useAuthCheck = () => {
   const { token, isAuth } = authStore;
 
   const { data, isLoading, isError } = useQuery({
     queryKey: ["authCheck"],
     queryFn,
     retry: false,
     refetchOnWindowFocus: false,
   });
 
   return { isLoading, isError, data, isAuth };
 };