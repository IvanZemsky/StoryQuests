import Loading from "@/app/loading"
import { PropsWithChildren, Suspense } from "react"

export const NoLayout = ({ children }: PropsWithChildren) => {
   return <Suspense fallback={<Loading />}>{children}</Suspense>
}
