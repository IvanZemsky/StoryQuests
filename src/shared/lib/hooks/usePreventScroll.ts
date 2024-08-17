import { useEffect } from "react"

export const usePreventScroll = (condition: boolean): void => {
   useEffect(() => {
      if (typeof window !== "undefined") {
         const currentYScroll = window.scrollY

         const preventScroll = () => {
            window.scrollTo({ top: currentYScroll })
         }

         if (condition) {
            window.addEventListener("scroll", preventScroll)
         }

         return () => {
            window.removeEventListener("scroll", preventScroll)
         }
      }
   }, [condition])
}