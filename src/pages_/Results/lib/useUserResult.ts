"use client"

import { useState, useEffect } from "react"

export function useUserResult(result: any) {
   const [storyResult, setStoryResult] = useState(result)

   useEffect(() => {
      if (result === null) {
         const localStoredResult = JSON.parse(localStorage.getItem("storyResult") || "")
         if (localStoredResult) {
            setStoryResult(localStoredResult)
         }
      }
   }, [result])

   return storyResult
}
