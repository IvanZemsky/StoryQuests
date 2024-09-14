import { Wrapper } from "@/src/shared/ui"
import styles from "./Story.module.scss"
import { SceneWrap } from "./SceneWrap/SceneWrap"
import { Metadata } from "next"

interface Page {
   params: {
      id: string
   }
}

export const generateMetadata = ({params}: Page): Metadata => {
   return {
      title: params.id
   }
}

export const Story = ({ params }: Page) => {
   console.log(params.id)
   return (
      <div className={styles.page}>
         <Wrapper>
            <SceneWrap/>
         </Wrapper>
      </div>
   )
}
