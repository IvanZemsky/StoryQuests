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
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useMemo, useRef } from "react"
import { observer } from "mobx-react"
import { ISceneData, ISceneNode } from "../../model/types"
import { useReactFlow, } from "@xyflow/react"

interface Props {
   id: string
   data: ISceneData
   setTitle: Dispatch<SetStateAction<string>>
}
const { closeModal } = modalStore

export const SceneModal = observer(({ id, data, setTitle  }: Props) => {
   const { updateNodeData } = useReactFlow<ISceneNode>();

   const modalContent = `sceneDataModal-${id}`

   const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
      const newTitle = event.target.value;
      setTitle(newTitle);
      updateNodeData(id, { ...data, title: newTitle });
   };
   
   const handleDescInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const newDesc = event.target.value;
      updateNodeData(id, { ...data, description: newDesc });
   };

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
                  onChange={handleTitleInput}
                  value={data.title}
               />
               <Textarea
                  className={styles.descInput}
                  counter
                  maxLength={300}
                  placeholder="Description"
                  onChange={handleDescInput}
                  value={data.description}
               />
               <ImageLoad label="Illustration" className={styles.illustration} />
            </div>
         </div>
      </Modal>
   )
})
