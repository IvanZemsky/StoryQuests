"use client"

import { useState, ChangeEvent, InputHTMLAttributes } from "react"

export const useInput = (
   maxLength: number | undefined,
   value: InputHTMLAttributes<HTMLInputElement>["value"],
   callback?: (...args: any) => any,
) => {
   const [inputValue, setInputValue] = useState(String(value) || "")

   const symbolsLeft = maxLength ? maxLength - inputValue.length : null

   const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValue(event.target.value.slice(0, maxLength))
      callback?.(event)
   }

   return [inputValue, handleChange, symbolsLeft] as const
}
