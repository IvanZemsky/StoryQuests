import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"
import { Metadata } from "next"
import { ReactFlowProvider } from "@xyflow/react"
import { CreateStoryFormButtons, CreateStoryForm } from "@/features/story"
import { StoryPreview } from "./StoryPreview"
import { StoryField } from "@/widgets/StoryField"

export const metadata: Metadata = {
   title: "Story creation",
}

export const CreateStory = () => {
   return (
      <Wrapper className={styles.wrapper}>
         <div className={styles.content}>
            <h1 className={styles.title}>Quest creation</h1>
            <form className={styles.form}>
               <CreateStoryForm />

               <ReactFlowProvider>
                  <StoryField />
               </ReactFlowProvider>

               <StoryPreview/>

               <CreateStoryFormButtons />
            </form>
         </div>
      </Wrapper>
   )
}
