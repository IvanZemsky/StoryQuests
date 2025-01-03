"use client"

import { Modal } from "@/shared/ui/Modal/Modal"
import styles from "./SceneModal.module.scss"
import {
   Button,
   Textarea,
   TextInput,
   ImageLoad,
} from "@/shared/ui"
import { Modals, modalStore } from "@/shared/model"
import { SceneNodeData, SceneNode } from "../../model/types"
import { useReactFlow } from "@xyflow/react"
import { Controller, useForm } from "react-hook-form"
import { useEffect } from "react"
import CrossIcon from "@/shared/assets/icons/cross.svg"
import TrashIcon from "@/shared/assets/icons/trash.svg"

type Props = {
   id: string
   data: SceneNodeData
   hasDeleteBtn?: boolean
}

const { closeModal } = modalStore

export const SceneModal = ({ id, data, hasDeleteBtn = true }: Props) => {
   const { updateNodeData, deleteElements } = useReactFlow<SceneNode>()
   const { getValues, register, setValue, control, reset } = useForm()

   const titleInput = register("title", {
      required: true,
      minLength: 5,
   })

   const descInput = register("desc")

   const modalContent = `${Modals.StoryScene}-${id}`

   const handleSaveChanges = () => {
      const title = getValues("title")
      const description = getValues("desc")
      const img = getValues("img")
      updateNodeData(id, { title, description, img, type: data.type })
   }

   const handleClose = () => {
      handleSaveChanges()
      closeModal()
   }

   useEffect(() => {
      reset({
        title: data.title,
        desc: data.description,
        img: data.img,
      });
    }, [data, reset]);

   const handleImgError = () => {
      setValue("img", "")
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
                           onClick={() => deleteElements({ nodes: [{ id }] })}
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

                  <Controller
                     control={control}
                     name="img"
                     render={({ field }) => (
                        <ImageLoad
                           label="Illustration"
                           defaultValue={data.img}
                           onError={handleImgError}
                           className={styles.illustration}
                           {...field}
                        />
                     )}
                  />
               </form>
            </div>
         </div>
      </Modal>
   )
}
