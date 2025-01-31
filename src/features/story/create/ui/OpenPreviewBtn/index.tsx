"use client"

import { Button } from "@/shared/ui"
import styles from "./styles.module.scss"
import { Modals, modalStore } from "@/shared/model"

const { openModal } = modalStore

export const OpenPreviewBtn = () => {
   
   const handlePreviewClick = () => {
      openModal(Modals.StoryPreview)
   }

   return (
      <Button
         variant="outlined"
         className={styles.previewBtn}
         uppercase
         onClick={handlePreviewClick}
      >
         Preview
      </Button>
   )
}
