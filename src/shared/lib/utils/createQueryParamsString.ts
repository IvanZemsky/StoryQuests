type InitParams = string[][] | Record<string, string> | string | URLSearchParams

export function createQueryParamsString(
   params: { [key: string]: any },
   initialParams?: InitParams,
) {
   const urlParams = new URLSearchParams(initialParams)
   
   Object.entries(params).forEach(([key, value]) => {
      console.log(key, value)
      if (value === null || value === "") {
         urlParams.delete(key)
      } else if (value !== undefined) {
         urlParams.set(key, value)
      }
   })

   
   return urlParams.toString()
}
