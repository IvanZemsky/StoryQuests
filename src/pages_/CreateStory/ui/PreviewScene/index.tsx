"use client"

import { BaseScene, Scene, useCurrentScene } from "@/entities/Scene"
import { STORY_FIRST_SCENE } from "@/entities/Story"
import { SelectAnswer } from "@/features/scene"

type Props = {
   scenes: Scene[]
}

export const PreviewScene = ({ scenes}: Props) => {
   const {sceneData, sceneId, setSceneId} = useCurrentScene(scenes, STORY_FIRST_SCENE)

   if (!sceneData) {
      return <p>Error</p>
   }

   return (
      <BaseScene
         currentSceneId={sceneId}
         data={sceneData}
         selectAnswer={<SelectAnswer answers={sceneData.answers} setScene={setSceneId} />}
      />
   )
}
