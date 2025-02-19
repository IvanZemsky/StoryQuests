import { Scene, SceneId, sceneService } from "@/entities/Scene"
import { StoryId } from "@/entities/Story"
import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"

type IncrementFuncArgs = {
   storyId: StoryId
   sceneId: SceneId
}

export function useIncrementScenePasses(
   sceneData: Scene | undefined,
   disabled: boolean = false,
) {
   const [passesIncremented, setPassesIncremented] = useState(false)

   const incrementScenePassesMutation = useMutation({
      mutationFn: ({ storyId, sceneId }: IncrementFuncArgs) =>
         sceneService.incrementScenePasses(storyId, sceneId),
      onSuccess: () => setPassesIncremented(true),
   })

   const isPassesUpdatePending =
      sceneData?.type === "end" &&
      !disabled &&
      !incrementScenePassesMutation.isPending &&
      !passesIncremented

   useEffect(() => {
      if (isPassesUpdatePending) {
         incrementScenePassesMutation.mutate({
            storyId: sceneData.storyId,
            sceneId: sceneData.id
         })
      }
   }, [sceneData])

   return incrementScenePassesMutation
}
