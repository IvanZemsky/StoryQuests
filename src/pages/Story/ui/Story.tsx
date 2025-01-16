import { Wrapper } from "@/shared/ui"
import styles from "./Story.module.scss"
import { sceneService } from "@/entities/Scene"
import { StoryScene } from "@/widgets/StoryScene"
import { Page } from "../model/types"

export const Story = async ({ params }: Page) => {
   const scenes = await sceneService.fetchScenesByStoryId(params.id)

   if (!scenes) {
      return <p>Error</p>
   }

   return (
      <div className={styles.page}>
         <Wrapper>
            <div className={styles.content}>
               <StoryScene scenes={scenes} />
            </div>
         </Wrapper>
      </div>
   )
}
