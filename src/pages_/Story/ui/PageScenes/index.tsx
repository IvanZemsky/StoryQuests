import { Wrapper } from "@/shared/ui"
import { StoryScene } from "@/widgets/StoryScene"
import styles from "./styles.module.scss"
import { Scene } from "@/entities/Scene"

type Props = {
   data: Scene[]
}

export const PageScenes = ({ data }: Props) => {
   return (
      <div className={styles.scenesWrapper}>
         <Wrapper>
            <div className={styles.content}>
               <StoryScene scenes={data} />
            </div>
         </Wrapper>
      </div>
   )
}
