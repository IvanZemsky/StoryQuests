"use client"

import styles from "./Scene.module.scss"
import { SelectAnswer } from "@/src/features/scene"
import { observer } from "mobx-react"
import { IStory, storyStore } from "@/src/entities/Story"
import { useEffect, useMemo } from "react"
import { SwitchFade } from "@/src/shared/ui/Transitions/SwitchFade/SwitchFade"
import { ArrowRightIcon, ButtonLink } from "@/src/shared/ui"
import { PageRoutes } from "@/src/shared/constants"

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
   }, [reset])

   if (!sceneData) {
      return <p>Ошибка</p>
   }

   return (
      <SwitchFade switchKey={currentSceneId} timeout={300}>
         <div className={styles.content}>
            {sceneData.type === 'end' && <div className={styles.topLine}></div>}
            <h2 className={styles.title}>{sceneData.title}</h2>
            {!!sceneData.description && (
               <p className={styles.desc}>{sceneData.description}</p>
            )}

            <div className={styles.controls}>
               <img
                  src={sceneData.img}
                  className={styles.illustration}
                  alt="illustration"
               />
               {sceneData.type === 'default' ? (
                  <SelectAnswer answers={sceneData.answers} />
               ) : (
                  <ButtonLink
                     variant="filled"
                     href={PageRoutes.Home}
                     className={styles.endBtn}
                     leftIcon={<ArrowRightIcon />}
                     defaultHover={false}
                  />
               )}
            </div>
            {sceneData.type === 'end' && <div className={styles.bottomLine}></div>}
         </div>
      </SwitchFade>
   )
})
