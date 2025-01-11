"use client"

import { BaseScene, Scene } from "@/entities/Scene"
import { STORY_FIRST_SCENE } from "@/entities/Story/model/constants"
import { SelectAnswer } from "@/features/scene"
import {  useState } from "react"

type Props = {
   scenes: Scene[]
}

export const StoryScene = ({ scenes }: Props) => {
   const [sceneId, setSceneId] = useState(STORY_FIRST_SCENE)

   const sceneData = scenes.find((scene) => scene.id === sceneId)

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
