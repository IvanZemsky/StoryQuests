import { ReadonlyURLSearchParams } from "next/navigation"

export function createQueryParamsString(
   params: { [key: string]: any },
   initialParams?: ReadonlyURLSearchParams,
) {
   const urlParams = new URLSearchParams(initialParams?.toString())
   Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === "") {
         urlParams.delete(key)
      } else if (value !== undefined) {
         urlParams.set(key, value)
      }
   })

   return urlParams.toString()
}
