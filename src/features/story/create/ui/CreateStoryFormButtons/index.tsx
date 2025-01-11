"use client"

import { Button } from "@/shared/ui"
import styles from "./styles.module.scss"
import { Modals, modalStore } from "@/shared/model"

type Props = {}

const { openModal } = modalStore

export const CreateStoryFormButtons = ({}: Props) => {
   const handlePreviewClick = () => {
      openModal(Modals.StoryPreview)
   }

   return (
      <>
         <Button
            variant="outlined"
            className={styles.previewBtn}
            uppercase
            onClick={handlePreviewClick}
         >
            Preview
         </Button>

         <Button variant="gradient" className={styles.publishBtn} uppercase>
            Publish
         </Button>
      </>
   )
}
