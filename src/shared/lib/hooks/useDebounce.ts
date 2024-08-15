import { useCallback, useRef } from "react"

export const useDebounce = (callback: (...args: any) => any, delay: number) => {
   const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null)

   const debauncedCallback = useCallback((...args: any[]) => {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
         callback(...args)
      }, delay);
   }, [callback])

   return debauncedCallback
}