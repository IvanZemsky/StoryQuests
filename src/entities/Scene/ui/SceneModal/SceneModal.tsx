"use client"

import { Modal } from "@/src/shared/ui/Modal/Modal"
import styles from "./SceneModal.module.scss"
import {
   Button,
   CrossIcon,
   Textarea,
   TextInput,
   TrashIcon,
   ImageLoad,
} from "@/src/shared/ui"
import { modalStore } from "@/src/shared/model"
import { storyCreationStore } from "../../model/storyCreatingStore"
import { ChangeEvent, useEffect, useMemo, useRef } from "react"
import { observer } from "mobx-react"
import { ISceneData } from "../../model/types"

interface Props {
   id: string
   data: ISceneData
}
const { closeModal } = modalStore

export const SceneModal = observer(({ id }: Props) => {
   const {nodes} = storyCreationStore
   const scene = useMemo(() => nodes.find(scene => scene.id === id)!, [])

   const modalContent = `sceneDataModal${id}`

   return (
      <Modal modalContent={modalContent} className={styles.modal}>
         <div className={styles.wrap}>
            <div className={styles.content}>
               <header className={styles.header}>
                  <h3 className={styles.title}>Scene</h3>
                  <div className={styles.buttons}>
                     <Button variant="filled" leftIcon={<TrashIcon />} />
                     <Button
                        variant="filled"
                        leftIcon={<CrossIcon />}
                        onClick={closeModal}
                     />
                  </div>
               </header>

               <TextInput
                  className={styles.titleInput}
                  counter
                  maxLength={100}
                  placeholder="Title"
                  value={scene.data.title}
               />
               <Textarea
                  className={styles.descInput}
                  counter
                  maxLength={300}
                  placeholder="Description"
                  value={scene.data.description}
               />
               <ImageLoad label="Illustration" className={styles.illustration} />
            </div>
         </div>
      </Modal>
   )
})
