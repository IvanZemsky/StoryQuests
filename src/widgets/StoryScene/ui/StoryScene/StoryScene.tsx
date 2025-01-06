"use client"

import { BaseScene, Scene } from "@/entities/Scene"
import { storyStore } from "@/entities/Story"
import { SelectAnswer } from "@/features/scene"
import { observer } from "mobx-react"

type Props = {
   scenes: Scene[]
}

export const StoryScene = observer(({ scenes }: Props) => {
   const { currentSceneId } = storyStore

   const sceneData = scenes.find((scene) => scene.id === currentSceneId)

   if (!sceneData) {
      return <p>Error</p>
   }

   return (
      <BaseScene
         currentSceneId={currentSceneId}
         data={sceneData}
         selectAnswer={<SelectAnswer answers={sceneData.answers} />}
      />
   )
})
