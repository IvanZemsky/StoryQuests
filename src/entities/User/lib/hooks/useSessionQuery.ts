import { useQuery } from "@tanstack/react-query"
import { userService } from "../../api/service"

export function useSessionQuery() {
   return useQuery({
      queryKey: ["session"],
      queryFn: userService.getSessionInfo,
      retry: 0,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
   })
}
