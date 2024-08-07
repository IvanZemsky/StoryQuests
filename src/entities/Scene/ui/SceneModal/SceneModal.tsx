"use client"

import { Modal } from "@/src/shared/ui/Modal/Modal"
import styles from "./SceneModal.module.scss"

interface Props {
   id: string
}

export const SceneModal = ({ id }: Props) => {
   const modalContent = `sceneDataModal${id}`

   return (
      <Modal modalContent={modalContent} className={styles.modal}>
         <div className={styles.content}></div>
      </Modal>
   )
}
