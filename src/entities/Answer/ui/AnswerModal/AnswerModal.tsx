"use client"

import { Modal } from "@/shared/ui/Modal/Modal"
import styles from "./AnswerModal.module.scss"
import { useForm } from "react-hook-form"
import { Button, TextInput } from "@/shared/ui"
import { IAnswerEdge, IAnswerEdgeData } from "../../model/types"
import { modalStore } from "@/shared/model"
import { useReactFlow } from "@xyflow/react"
import { SceneNode } from "@/entities/Scene"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import TrashIcon from "@/shared/assets/icons/trash.svg"

const { closeModal } = modalStore

interface Props {
   id: string
   data: IAnswerEdgeData
}

export const AnswerModal = ({ id, data }: Props) => {
   const { getValues, register } = useForm()

   const { updateEdgeData, deleteElements } = useReactFlow<SceneNode, IAnswerEdge>()

   const textInput = register("text", {
      required: true,
      minLength: 1,
   })

   const modalContent = `sceneAnswer-${id}`

   const handleRemoveClick = () => {
      deleteElements({ edges: [{ id }] })
   }

   const handleSaveChanges = () => {
      const text = getValues("text")
      updateEdgeData(id, { text })
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
                  <h3 className={styles.title}>Answer</h3>
                  <div className={styles.buttons}>
                     <Button
                        variant="filled"
                        leftIcon={<TrashIcon />}
                        onClick={handleRemoveClick}
                        className={styles.removeBtn}
                     />
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
                     {...textInput}
                     className={styles.titleInput}
                     counter
                     maxLength={35}
                     placeholder="Title"
                     value={data.text}
                  />
               </form>
            </div>
         </div>
      </Modal>
   )
}
