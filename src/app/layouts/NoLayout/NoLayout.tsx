import { Loading } from "@/shared/ui"
import { PropsWithChildren, Suspense } from "react"

export const NoLayout = ({ children }: PropsWithChildren) => {
   return <Suspense fallback={<Loading />}>{children}</Suspense>
}
