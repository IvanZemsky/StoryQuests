import { useQuery } from "@tanstack/react-query"
import { userService } from "../../api/service"

const sessionKey = ["session"]

export function useSessionQuery() {
   return useQuery({
      queryKey: sessionKey,
      queryFn: userService.getSessionInfo,
      retry: 0,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
   })
}
