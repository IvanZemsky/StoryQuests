'use client'

import { BaseScene, Scene } from "@/entities/Scene"
import { storyStore } from "@/entities/Story"
import { SelectAnswer } from "@/features/scene"
import { scrollToTop } from "@/shared/lib"
import { observer } from "mobx-react"
import { useMemo, useEffect } from "react"

type Props = {
   scenes: Scene[]
}

export const StoryScene = observer(({ scenes }: Props) => {
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
