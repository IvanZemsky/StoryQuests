import { Wrapper } from "@/src/shared/ui"
import styles from "./Story.module.scss"
import { SceneWrap } from "./SceneWrap/SceneWrap"

export const Story = () => {
   return (
      <div className={styles.page}>
         <Wrapper>
            <SceneWrap/>
         </Wrapper>
      </div>
   )
}
