import { Scene } from "@/entities/Scene"
import { storyService } from "@/entities/Story"
import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export function useIncrementStoryPasses(
   sceneData: Scene | undefined,
   disabled: boolean = false,
) {
   const [passesIncremented, setPassesIncremented] = useState(false)

   const incrementStoryPassesMutation = useMutation({
      mutationFn: storyService.incrementStoryPasses,
      onSuccess: () => setPassesIncremented(true),
   })

   const isPassesUpdatePending =
      sceneData?.type === "end" &&
      !disabled &&
      !incrementStoryPassesMutation.isPending &&
      !passesIncremented

   useEffect(() => {
      if (isPassesUpdatePending) {
         incrementStoryPassesMutation.mutate(sceneData.storyId)
      }
   }, [sceneData])

   return incrementStoryPassesMutation
}
