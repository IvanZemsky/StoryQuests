import { Button } from "@/src/shared/ui"
import { StoryPreview } from "../StoryPreview/StoryPreview"
import styles from './MainSection.module.scss'
import { modalStore } from "@/src/shared/model"

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

         <StoryPreview />

         <Button variant="gradient" className={styles.publishBtn} uppercase>
            Publish
         </Button>
      </>
   )
}
