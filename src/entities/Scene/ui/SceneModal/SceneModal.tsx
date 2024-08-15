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
import { ISceneNodeData, ISceneNode } from "../../model/types"
import { useReactFlow } from "@xyflow/react"
import { useForm } from "react-hook-form"

interface Props {
   id: string
   data: ISceneNodeData
   hasDeleteBtn?: boolean
}

const { closeModal } = modalStore

export const SceneModal = ({ id, data, hasDeleteBtn = true }: Props) => {
   const { updateNodeData, deleteElements } = useReactFlow<ISceneNode>()
   const { getValues, register } = useForm()

   const titleInput = register("title", {
      required: true,
      minLength: 1,
   })

   const descInput = register("desc")
   const imgInput = register("img")

   const modalContent = `storyScene-${id}`

   const handleRemoveClick = () => {
      deleteElements({ nodes: [{ id }] })
   }

   const handleSaveChanges = () => {
      const title = getValues("title")
      const description = getValues("desc")
      const img = getValues("img")
      console.log(img)
      updateNodeData(id, { title, description, img })
   }

   const handleClose = () => {
      handleSaveChanges()
      closeModal()
   }

   return (
      <Modal
         modalContent={modalContent}
         className={styles.modal}
         onClose={handleSaveChanges}
      >
         <div className={styles.wrap}>
            <div className={styles.content}>
               <header className={styles.header}>
                  <h3 className={styles.title}>Scene</h3>
                  <div className={styles.buttons}>
                     {hasDeleteBtn && (
                        <Button
                           variant="filled"
                           leftIcon={<TrashIcon />}
                           onClick={handleRemoveClick}
                           className={styles.removeBtn}
                        />
                     )}
                     <Button
                        variant="filled"
                        leftIcon={<CrossIcon />}
                        onClick={handleClose}
                        className={styles.closeBtn}
                     />
                  </div>
               </header>

               <form className={styles.form}>
                  <TextInput
                     {...titleInput}
                     className={styles.titleInput}
                     counter
                     maxLength={100}
                     placeholder="Title"
                     value={data.title}
                  />

                  <Textarea
                     {...descInput}
                     className={styles.descInput}
                     counter
                     maxLength={300}
                     placeholder="Description"
                     value={data.description}
                  />

                  <ImageLoad
                     {...imgInput}
                     defaultValue={getValues("img")}
                     label="Illustration"
                     className={styles.illustration}
                  />
               </form>
            </div>
         </div>
      </Modal>
   )
}
