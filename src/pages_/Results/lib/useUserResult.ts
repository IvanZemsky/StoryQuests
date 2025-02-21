"use client"

import { StoryId, StoryResult, StoryResultInLS } from "@/entities/Story"
import { useState, useEffect } from "react"

export function useUserResult(result: StoryResult | null, storyId: StoryId) {
   const [isLoading, setIsLoading] = useState(true)
   const [storyResult, setStoryResult] = useState<StoryResult | StoryResultInLS | null>(
      result,
   )

   useEffect(() => {
      if (result === null) {
         const localStoredResults: StoryResultInLS[] = JSON.parse(
            localStorage.getItem("storyResults") || "[]",
         )

         const storyResult = localStoredResults.find(
            (result: StoryResultInLS) => result.storyId === storyId,
         )

         if (storyResult) {
            setStoryResult(storyResult)
         }
      }
      
      setIsLoading(false)
   }, [result, storyId])

   return { isLoading, storyResult }
}
