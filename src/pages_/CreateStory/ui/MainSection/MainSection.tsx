import { Button } from "@/shared/ui"
import styles from './MainSection.module.scss'
import { modalStore } from "@/shared/model"

type Props = {}

const { openModal } = modalStore

export const MainSection = ({}: Props) => {
   const handlePreviewClick = () => {
      openModal("storyPreview")
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
