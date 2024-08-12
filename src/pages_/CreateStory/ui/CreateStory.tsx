'use client'

import { Button, Wrapper } from "@/src/shared/ui"
import styles from "./CreateStory.module.scss"
import { CreateStoryFields } from "@/src/entities/Story"
import { StoryCard } from "@/src/entities/Story/"
import { StoryField } from "@/src/features/story"
import { ReactFlowProvider } from "@xyflow/react"
import { storyCreationStore } from "@/src/entities/Story"

const { createScenes } = storyCreationStore

export const CreateStory = () => {
   return (
      <Wrapper className={styles.wrapper}>
         <div className={styles.content}>
            <h1 className={styles.title}>Quest creation</h1>
            <form className={styles.form}>
               <div className={styles.top}>
                  <CreateStoryFields />
                  <StoryCard className={styles.preview} />
               </div>

               <ReactFlowProvider>
                  <StoryField />
               </ReactFlowProvider>

               <Button
                  variant="gradient"
                  className={styles.publishBtn}
                  uppercase
                  onClick={() => createScenes()}
               >
                  Publish
               </Button>
            </form>
         </div>
      </Wrapper>
   )
}
