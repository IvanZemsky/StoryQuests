"use client"

import { Modal } from "@/src/shared/ui/Modal/Modal"
import styles from "./StoryPreview.module.scss"
import { Scene } from "@/src/features/scene"
import { observer } from "mobx-react"
import { IStory, storyCreationStore } from "@/src/entities/Story"
import { useEffect } from "react"
import { modalStore } from "@/src/shared/model"
import { Button } from "@/src/shared/ui"

type Props = {}

const { closeModal } = modalStore

export const StoryPreview = observer(({}: Props) => {
   const {validate, scenes, createScenes } = storyCreationStore
   const { opened } = modalStore

   useEffect(() => {
      if (opened === "storyPreview") {
         validate()
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
               <Button variant="filled" className={styles.closeBtn} onClick={closeModal}>
                  Close preview
               </Button>
               <div className={styles.sceneWrap}>
                  <Scene storyData={storyData} />
               </div>
            </div>
         )}
      </Modal>
   )
})
