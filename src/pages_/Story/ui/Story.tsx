import { Wrapper } from "@/src/shared"
import styles from "./Story.module.scss"
import { Scene } from "@/src/widgets/Scene"
import { story } from "../data/story"

export const Story = () => {
   
   if (!story) {
      return <p>Ошибка</p>
   }

   return (
      <Wrapper>
         <div className={styles.content}>
            <Scene storyData={story}/>
         </div>
      </Wrapper>
   )
}
