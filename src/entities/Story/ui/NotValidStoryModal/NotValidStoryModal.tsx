'use client'

import { Button, Modal } from "@/src/shared/ui"
import styles from "./NotValidStoryModal.module.scss"
import { modalStore } from "@/src/shared/model"

export const NotValidStoryModal = () => {
   const {closeModal} = modalStore

   return (
      <Modal modalContent="storyPreview" className={styles.modal}>
         <div className={styles.content}>
            <h3>Story is not ready for preview</h3>
            <p className={styles.desc}>Check if it satisfies the conditions:</p>
            <ul>
               <li>Every scene must have title and image</li>
               <li>Every answer must not be empty</li>
            </ul>
            <Button onClick={closeModal}>Ok</Button>
         </div>
      </Modal>
   )
}
