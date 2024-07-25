import { Wrapper } from "@/src/shared"
import styles from "./Story.module.scss"
import { Scene } from "@/src/widgets/Scene"

export const Story = () => {
   return (
      <Wrapper>
         <div className={styles.content}>
            <Scene />
         </div>
      </Wrapper>
   )
}
