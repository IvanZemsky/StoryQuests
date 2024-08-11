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
import { useRef, ChangeEvent, Dispatch, SetStateAction } from "react"
import { observer } from "mobx-react"
import { ISceneData, ISceneNode } from "../../model/types"
import { useReactFlow } from "@xyflow/react"

interface Props {
   id: string
   data: ISceneData
   setTitle: Dispatch<SetStateAction<string>>
   hasDeleteBtn?: boolean
}

const { closeModal } = modalStore

export const SceneModal = observer(
   ({ id, data, setTitle, hasDeleteBtn = true }: Props) => {
      const { updateNodeData, deleteElements } = useReactFlow<ISceneNode>()
      const titleRef = useRef<HTMLInputElement>(null)
      const descRef = useRef<HTMLTextAreaElement>(null)

      const modalContent = `storyScene-${id}`

      const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
         const newTitle = event.target.value
         if (titleRef.current) {
            titleRef.current.value = newTitle
            setTitle(newTitle)
         }
      }

      const handleDescInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
         const newDesc = event.target.value
         if (descRef.current) {
            descRef.current.value = newDesc
         }
      }

      const handleRemoveClick = () => {
         deleteElements({ nodes: [{ id }] })
      }

      const handleSaveChanges = () => {
         if (titleRef.current && descRef.current) {
            const title = titleRef.current.value
            const description = descRef.current.value
            updateNodeData(id, { title, description })
         }
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
                        ref={titleRef}
                        className={styles.titleInput}
                        counter
                        maxLength={100}
                        placeholder="Title"
                        onChange={handleTitleInput}
                        value={data.title}
                     />

                     <Textarea
                        ref={descRef}
                        className={styles.descInput}
                        counter
                        maxLength={300}
                        placeholder="Description"
                        onChange={handleDescInput}
                        value={data.description}
                     />

                     <ImageLoad label="Illustration" className={styles.illustration} />
                  </form>
               </div>
            </div>
         </Modal>
      )
   },
)
