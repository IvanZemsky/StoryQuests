"use client"

import { queryClient } from "@/shared/model";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export const ReactQueryProvider = ({children}: PropsWithChildren) => {
   return ( 
      <QueryClientProvider client={queryClient}>
         {children}
      </QueryClientProvider>
   );
}