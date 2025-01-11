'use client'

import { Button, Modal } from "@/shared/ui"
import { modalStore, Modals } from "@/shared/model"
import styles from "./styles.module.scss"

export const NotValidStoryModal = () => {
   const {closeModal} = modalStore

   return (
      <Modal modalContent={Modals.StoryPreview} className={styles.modal}>
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
