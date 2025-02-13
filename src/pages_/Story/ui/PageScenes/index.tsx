import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"
import { Scene } from "@/entities/Scene"
import { UserId } from "@/entities/User"
import { StoryScene } from "../StoryScene"

type Props = {
   data: Scene[]
   userId: UserId | null
}

export const PageScenes = ({ data, userId }: Props) => {
   return (
      <div className={styles.scenesWrapper}>
         <Wrapper>
            <div className={styles.content}>
               <StoryScene scenes={data} userId={userId} />
            </div>
         </Wrapper>
      </div>
   )
}
