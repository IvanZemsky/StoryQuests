import { useEffect } from "react"

export const usePreventScroll = (condition: boolean): void => {
   const currentYScroll = window.scrollY

   const preventScroll = () => {
      scrollTo({ top: currentYScroll })
   }

   useEffect(() => {
      if (condition) {
         window.addEventListener("scroll", preventScroll)
      }

      return () => {
         window.removeEventListener("scroll", preventScroll)
      }
   }, [condition])
}