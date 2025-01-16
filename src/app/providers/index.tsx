import { PropsWithChildren } from "react"
import { ReactQueryProvider } from "./ReactQuery"

export const Providers = ({ children }: PropsWithChildren) => {
   return <ReactQueryProvider>{children}</ReactQueryProvider>
}
