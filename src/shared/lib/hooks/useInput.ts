import { useState, ChangeEvent } from "react"

export const useInput = (maxLength: number | undefined, value: string | undefined, callback?: (...args: any) => any ) => {
   const [inputValue, setInputValue] = useState(value || "")

   const symbolsLeft = maxLength ? maxLength - inputValue.length : null

   const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValue(event.target.value.slice(0, maxLength))
      callback && callback(event)
   }

   return [inputValue, handleChange, symbolsLeft] as const
}