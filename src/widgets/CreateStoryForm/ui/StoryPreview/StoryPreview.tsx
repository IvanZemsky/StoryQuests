"use client"

import { Modal } from "@/src/shared/ui/Modal/Modal"
import styles from "./StoryPreview.module.scss"
import { Scene } from "@/src/features/scene"
import { observer } from "mobx-react"
import { IStory, storyCreationStore } from "@/src/entities/Story"
import { useEffect } from "react"
import { modalStore } from "@/src/shared/model"

type Props = {}
export const StoryPreview = observer(({}: Props) => {
   const { scenes, createScenes } = storyCreationStore
   const {opened} = modalStore

   useEffect(() => {
      if (opened === 'storyPreview') {
         createScenes()
      }
   }, [opened])

   const storyData: IStory = {
      id: "1",
      name: "",
      description: "",
      img: "",
      scenes,
   }

   return (
      <Modal modalContent="storyPreview" className={styles.modal}>
         {!scenes.length ? (
            <p>Loading...</p>
         ) : (
            <div className={styles.content}>
               <Scene storyData={storyData} />
            </div>
         )}
      </Modal>
   )
})
