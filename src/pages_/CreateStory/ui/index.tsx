import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"
import { Metadata } from "next"
import { CreateStoryForm } from "@/features/story"
import { StoryPreview } from "./StoryPreview"
import { StoryCreationField } from "./StoryCreationField"
import { verifyServerSession } from "@/features/user"

export const metadata: Metadata = {
   title: "Story creation",
}

export const CreateStory = async () => {
   const session = await verifyServerSession()

   if (!session) {
      return <p>Error</p>
   }

   return (
      <Wrapper className={styles.wrapper}>
         <div className={styles.content}>
            <h1 className={styles.title}>Quest creation</h1>

            <CreateStoryForm
               authorLogin={session.login}
               field={<StoryCreationField/>}
            />

            <StoryPreview />
         </div>
      </Wrapper>
   )
}
