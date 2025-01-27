import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"
import { Metadata } from "next"
import { ReactFlowProvider } from "@xyflow/react"
import { CreateStoryFormButtons, CreateStoryForm } from "@/features/story"
import { StoryPreview } from "./StoryPreview"
import { StoryField } from "@/widgets/StoryField"
import { userService } from "@/entities/User"
import { cookies } from "next/headers"

export const metadata: Metadata = {
   title: "Story creation",
}

export const CreateStory = async () => {
   const accessToken = (await cookies()).get("access-token")
   
   const session = await userService.getSessionInfo({
      cookie: `${accessToken?.name}=${accessToken?.value}`,
   })

   if (!session) {
      return <p>Error</p>
   }

   return (
      <Wrapper className={styles.wrapper}>
         <div className={styles.content}>
            <h1 className={styles.title}>Quest creation</h1>
            <form className={styles.form}>
               <CreateStoryForm authorLogin={session.login} />

               <ReactFlowProvider>
                  <StoryField />
               </ReactFlowProvider>

               <StoryPreview />

               <CreateStoryFormButtons />
            </form>
         </div>
      </Wrapper>
   )
}
