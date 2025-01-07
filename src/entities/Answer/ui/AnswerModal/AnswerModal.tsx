"use client"

import { Modal } from "@/shared/ui/Modal/Modal"
import styles from "./styles.module.scss"
import { useForm } from "react-hook-form"
import { Button } from "@/shared/ui"
import { IAnswerEdge } from "../../model/types"
import { modalStore } from "@/shared/model"
import { useReactFlow } from "@xyflow/react"
import { SceneNode } from "@/entities/Scene"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import TrashIcon from "@/shared/assets/icons/trash.svg"
import { AnswerForm } from "../AnswerForm/AnswerForm"

const { closeModal } = modalStore

type Props = {
   id: string
}

export const AnswerModal = ({ id }: Props) => {
   const { getValues, register } = useForm()

   const textInput = register("text", {
      required: true,
      minLength: 1,
   })

   const { updateEdgeData, deleteElements } = useReactFlow<SceneNode, IAnswerEdge>()

   const modalContent = `sceneAnswer-${id}`

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
                        onClick={() => deleteElements({ edges: [{ id }] })}
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

               <AnswerForm textInput={textInput} />

            </div>
         </div>
      </Modal>
   )
}
