'use client'

import { Button, Modal } from "@/src/shared/ui"
import styles from "./styles.module.scss"
import { modalStore } from "@/src/shared/model"
import { Modals } from "@/src/shared/model/modals"

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
