import { Wrapper } from "@/src/shared/ui"
import styles from "./CreateStory.module.scss"
import { StoryPreview } from "./StoryPreview/StoryPreview"
import { CreateStoryForm } from "./CreateStoryForm/CreateStoryForm"
import { Metadata } from "next"

export const metadata: Metadata = {
   title: 'Story creation'
}

export const CreateStory = () => {
   return (
      <Wrapper className={styles.wrapper}>
         <CreateStoryForm storyPreview={<StoryPreview />} />
      </Wrapper>
   )
}
