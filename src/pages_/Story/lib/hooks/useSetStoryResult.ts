import { Scene } from "@/entities/Scene"
import { storyService } from "@/entities/Story"
import { UserId } from "@/entities/User"
import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export function useSetStoryResult(options: {
   sceneData: Scene | undefined
   userId: UserId | null
   disabled: boolean
}) {
   const { sceneData, userId, disabled } = options
   const [isResultSet, setIsResultSet] = useState(false)

   const setStoryResultMutation = useMutation({
      mutationFn: storyService.setStoryResult,
      onSettled: () => setIsResultSet(true),
   })

   const isResultPending =
      sceneData?.type === "end" &&
      !disabled &&
      !setStoryResultMutation.isPending &&
      !isResultSet

   useEffect(() => {
      if (isResultPending) {
         setStoryResultMutation.mutate({
            storyId: sceneData.storyId,
            userId,
            resultSceneId: sceneData.id,
         })
      }
   }, [sceneData])

   return setStoryResultMutation
}
