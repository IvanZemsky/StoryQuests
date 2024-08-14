"use client"

import { StoryCard, storyCreationStore } from "@/src/entities/Story"
import { StoryField } from "@/src/features/story"
import { Button, ImageLoad, Textarea, TextInput } from "@/src/shared/ui"
import { ReactFlowProvider } from "@xyflow/react"
import styles from "./CreateStory.module.scss"
import { observer } from "mobx-react"
import { useForm, useWatch } from "react-hook-form"
import { TopFields } from "./TopFields/TopFields"

const { createScenes } = storyCreationStore

export const CreateStoryForm = () => {
   const { register, control } = useForm()

   const nameInput = register("name")
   const descInput = register("desc")
   const imgInput = register("img")

   return (
      <div className={styles.content}>
         <h1 className={styles.title}>Quest creation</h1>
         <form className={styles.form}>
            <TopFields
               nameInput={nameInput}
               descInput={descInput}
               imgInput={imgInput}
               control={control}
            />

            <ReactFlowProvider>
               <StoryField />
            </ReactFlowProvider>

            <Button variant="gradient" className={styles.publishBtn} uppercase>
               Publish
            </Button>
         </form>
      </div>
   )
}
