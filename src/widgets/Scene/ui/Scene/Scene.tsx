'use client'

import { BaseScene, IScene } from "@/src/entities/Scene"
import { storyStore } from "@/src/entities/Story"
import { SelectAnswer } from "@/src/features/scene"
import { observer } from "mobx-react"
import { useMemo, useEffect } from "react"

interface Props {
   scenes: IScene[]
}

export const Scene = observer(({ scenes }: Props) => {
   const { currentSceneId, reset } = storyStore

   useEffect(() => {
      reset()
   }, [])

   const sceneData = useMemo(
      () => scenes.find((scene) => scene.id === currentSceneId),
      [scenes, currentSceneId],
   )

   if (!sceneData) {
      return <p>Error</p>
   }

   const { id, title, description, type, img, answers } = sceneData

   return (
      <BaseScene
         currentSceneId={currentSceneId}
         id={id}
         title={title}
         description={description}
         img={img}
         type={type}
         selectAnswer={<SelectAnswer answers={answers} />}
      />
   )
})
