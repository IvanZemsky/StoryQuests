"use client"

import { BaseScene, Scene } from "@/entities/Scene"
import { STORY_FIRST_SCENE } from "@/entities/Story/model/constants"
import { SelectAnswer } from "@/features/scene"
import { useState } from "react"
import { useIncrementStoryPasses } from "../../lib/useIncrementStoryPasses"

type Props = {
   scenes: Scene[]
   isPreview?: boolean
}

export const StoryScene = ({ scenes, isPreview = false }: Props) => {
   const [sceneId, setSceneId] = useState(STORY_FIRST_SCENE)

   const sceneData = scenes.find((scene) => scene.id === sceneId)

   const { isPending } = useIncrementStoryPasses(sceneData, isPreview)

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
