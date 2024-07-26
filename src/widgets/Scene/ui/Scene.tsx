"use client"

import styles from "./Scene.module.scss"
import Image from "next/image"
import cardbg from "@/public/cardbg.jpg"
import { SelectAnswer } from "@/src/features/scene/toNextScene"
import { observer } from "mobx-react"
import { IStory, storyStore } from "@/src/entities/Story"
import { useMemo } from "react"

interface Props {
   storyData: IStory
}

export const Scene = observer(({ storyData }: Props) => {
   const { currentSceneId, setScene } = storyStore

   const sceneData = useMemo(
      () => storyData.scenes.find((scene) => scene._id === currentSceneId),
      [storyData.scenes, currentSceneId],
   )

   if (!sceneData) {
      return <p>Ошибка</p>
   }

   return (
      <div className={styles.content}>
         <h2 className={styles.title}>{sceneData.title}</h2>
         {storyData.description && <p className={styles.desc}>{sceneData.description}</p>}
         <div className={styles.controls}>
            <Image src={cardbg} className={styles.illustration} alt="illustration" />
            <SelectAnswer answers={sceneData.answers} />
         </div>
      </div>
   )
})
