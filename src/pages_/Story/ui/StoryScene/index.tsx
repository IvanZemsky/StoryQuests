"use client"

import { BaseScene, Scene, useCurrentScene } from "@/entities/Scene"
import { STORY_FIRST_SCENE } from "@/entities/Story"
import { UserId } from "@/entities/User"
import { SelectAnswer } from "@/features/scene"
import { useIncrementStoryPasses } from "../../lib/hooks/useIncrementStoryPasses"
import { useSetStoryResult } from "../../lib/hooks/useSetStoryResult"
import { saveStoryResultToLS } from "../../lib/helpers/saveStoryResultToLS"
import { useEffect } from "react"

type Props = {
   scenes: Scene[]
   userId: UserId | null
}

export const StoryScene = ({ scenes, userId }: Props) => {
   const {sceneData, sceneId, setSceneId} = useCurrentScene(scenes, STORY_FIRST_SCENE)
   const increasePassesMutation = useIncrementStoryPasses(sceneData)
   const resultMutation = useSetStoryResult({
      sceneData,
      userId,
      disabled: !userId,
   })

   const shouldSaveToLS =
      (increasePassesMutation.error || !userId) && sceneData?.type === "end"

   useEffect(() => {
      if (shouldSaveToLS) {
         saveStoryResultToLS(sceneData)
      }
   }, [shouldSaveToLS, sceneData])

   const isPending = increasePassesMutation.isPending || resultMutation.isPending

   if (!sceneData) {
      return <p>Error</p>
   }

   return (
      <BaseScene
         currentSceneId={sceneId}
         data={sceneData}
         selectAnswer={<SelectAnswer answers={sceneData.answers} setScene={setSceneId} />}
         disabledLink={isPending}
      />
   )
}
