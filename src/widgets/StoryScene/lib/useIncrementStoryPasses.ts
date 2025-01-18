import { Scene } from "@/entities/Scene"
import { storyService } from "@/entities/Story"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

export function useIncrementStoryPasses(sceneData: Scene | undefined, disabled: boolean) {
   const [passesIncremented, setPassesIncremented] = useState(false)

   const incrementStoryPassesMutation = useMutation({
      mutationFn: storyService.incrementStoryPasses,
      onSuccess: () => setPassesIncremented(true),
   })

   const isEndScenePending =
      sceneData?.type === "end" &&
      !disabled &&
      !incrementStoryPassesMutation.isPending &&
      !passesIncremented

   if (isEndScenePending) {
      incrementStoryPassesMutation.mutate(sceneData.storyId)
   }

   return incrementStoryPassesMutation
}
