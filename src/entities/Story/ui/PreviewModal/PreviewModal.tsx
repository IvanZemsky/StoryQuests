'use client'

import { Button, Modal } from "@/src/shared/ui"
import styles from "./PreviewModal.module.scss"
import { observer } from "mobx-react"
import { storyCreationStore } from "../../model/storyCreatingStore"
import { ReactNode } from "react"
import { modalStore } from "@/src/shared/model"
import { Modals } from "@/src/shared/model/modals"

interface Props {
   scene: ReactNode
}
export const PreviewModal = observer(({ scene }: Props) => {
   const { scenes } = storyCreationStore
   const { closeModal } = modalStore

   return (
      <Modal modalContent={Modals.StoryPreview} className={styles.modal}>
         {!scenes.length ? (
            <p>Loading...</p>
         ) : (
            <div className={styles.content}>
               <Button variant="filled" className={styles.closeBtn} onClick={closeModal}>
                  Close preview
               </Button>
               <div className={styles.sceneWrap}>{scene}</div>
            </div>
         )}
      </Modal>
   )
})
