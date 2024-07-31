import { Button, ImageLoad, Wrapper } from "@/src/shared"
import styles from "./CreateStory.module.scss"
import { CreateStoryFields } from "@/src/entities/Story"
import { StoryCard } from "@/src/entities/Story/"
import { StoryField } from "@/src/features/story"

type Props = {}
export const CreateStory = ({}: Props) => {
   return (
      <Wrapper className={styles.wrapper}>
         <div className={styles.content}>
            <h1 className={styles.title}>Quest creation</h1>
            <form className={styles.form}>
               <div className={styles.top}>
                  <CreateStoryFields />
                  <StoryCard className={styles.preview} />
               </div>
               <StoryField />
               <Button variant="gradient" className={styles.publishBtn} uppercase>Publish</Button>
            </form>
         </div>
      </Wrapper>
   )
}
