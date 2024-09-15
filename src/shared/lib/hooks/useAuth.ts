import { useQuery } from "@tanstack/react-query"
import { api, APIEndpoints, IUserLogin } from "../../api"

const login = (loginData: IUserLogin) => {
   const data = api.post(APIEndpoints.Login, loginData)
   return data
}

export const useAuth = (loginData: IUserLogin) => {
   const { data } = useQuery({ queryKey: ["login"], queryFn: () => login(loginData) })
}
