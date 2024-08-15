import { Wrapper } from "@/src/shared/ui"
import styles from "./Story.module.scss"
import { Scene } from "@/src/features/scene"
import { story } from "../data/story"

export const Story = () => {
   if (!story) {
      return <p>Ошибка</p>
   }

   return (
      <div className={styles.page}>
         <Wrapper>
            <div className={styles.content}>
               <Scene storyData={story} />
            </div>
         </Wrapper>
      </div>
   )
}
