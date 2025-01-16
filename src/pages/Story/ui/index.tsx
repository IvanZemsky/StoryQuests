import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"
import { Page } from "../model/types"
import { StoryWrap } from "./StoryWrap"
import { storyService } from "@/entities/Story"


export const Story = async ({ params }: Page) => {
   const story = await storyService.fetchStoryById(params.id)

   if (!story) {
      return <p>Error</p>
   }

   return (
      <div className={styles.page}>
         <Wrapper>
            <div className={styles.content}>
               <StoryWrap story={story}/>
            </div>
         </Wrapper>
      </div>
   )
}
