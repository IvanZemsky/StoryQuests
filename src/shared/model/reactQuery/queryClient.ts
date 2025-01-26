import { QueryClient } from "@tanstack/react-query"
import { ZodError } from "zod"

export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: (failureCount, error) => {
            if (error instanceof ZodError) {
               return false
            }
            return failureCount < 3
         },
      },
   },
})
