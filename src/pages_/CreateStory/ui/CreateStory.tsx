import { Wrapper } from "@/src/shared/ui"
import styles from "./CreateStory.module.scss"
import { CreateStoryForm } from "@/src/widgets/CreateStoryForm"
import { StoryPreview } from "./StoryPreview/StoryPreview"

export const CreateStory = () => {
   return (
      <Wrapper className={styles.wrapper}>
         <CreateStoryForm storyPreview={<StoryPreview />} />
      </Wrapper>
   )
}
