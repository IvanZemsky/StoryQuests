"use client"

import { StoryField } from "@/src/features/story"
import { ReactFlowProvider } from "@xyflow/react"
import styles from "./CreateStory.module.scss"
import { useForm } from "react-hook-form"
import { TopFields } from "./TopFields/TopFields"
import { MainSection } from './MainSection/MainSection';

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
               control={control}
               nameInput={nameInput}
               descInput={descInput}
               imgInput={imgInput}
            />

            <ReactFlowProvider>
               <StoryField />
            </ReactFlowProvider>

            <MainSection/>
         </form>
      </div>
   )
}
