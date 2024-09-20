"use client"

import { StoryField } from "@/features/story"
import { ReactFlowProvider } from "@xyflow/react"
import styles from "./CreateStoryForm.module.scss"
import { useForm } from "react-hook-form"
import { TopFields } from "../TopFields/TopFields"
import { MainSection } from '../MainSection/MainSection';
import { ReactNode } from "react"

interface Props {
   storyPreview: ReactNode
}

export const CreateStoryForm = ({storyPreview}: Props) => {
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

            {storyPreview}

            <MainSection/>
         </form>
      </div>
   )
}
