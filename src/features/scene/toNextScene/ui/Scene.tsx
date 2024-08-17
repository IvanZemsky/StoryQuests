"use client"

import styles from "./Scene.module.scss"
import { SelectAnswer } from "@/src/features/scene"
import { observer } from "mobx-react"
import { IStory, storyStore } from "@/src/entities/Story"
import { useEffect, useMemo } from "react"

interface Props {
   storyData: IStory
}

export const Scene = observer(({ storyData }: Props) => {
   const { currentSceneId, reset } = storyStore

   const sceneData = useMemo(
      () => storyData.scenes.find((scene) => scene.id === currentSceneId),
      [storyData.scenes, currentSceneId],
   )

   useEffect(() => {
      reset()
   }, [])

   if (!sceneData) {
      return <p>Ошибка</p>
   }

   return (
      <div className={styles.content}>
         <h2 className={styles.title}>{sceneData.title}</h2>
         {!!sceneData.description && <p className={styles.desc}>{sceneData.description}</p>}
         
         <div className={styles.controls}>
            <img src={sceneData.img} className={styles.illustration} alt="illustration" />
            <SelectAnswer answers={sceneData.answers} />
         </div>
      </div>
   )
})
