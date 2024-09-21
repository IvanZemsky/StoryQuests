'use client'

import { BaseScene, IScene } from "@/entities/Scene"
import { storyStore } from "@/entities/Story"
import { SelectAnswer } from "@/features/scene"
import { scrollToTop } from "@/shared/lib"
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

   useEffect(() => {
      scrollToTop()
   }, [sceneData])

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
