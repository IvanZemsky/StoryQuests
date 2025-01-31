"use client"

import styles from "./styles.module.scss"
import { ReactNode } from "react"
import { ReactFlowProvider } from "@xyflow/react"
import { OpenPreviewBtn } from "./OpenPreviewBtn"
import { SubmitButton } from "./SubmitBtn"
import { TopSection } from "./TopSection"
import { FormProvider, useForm } from "react-hook-form"
import { observer } from "mobx-react"
import { storyCreationStore } from "../model/storyCreationStore"
import { toJS } from "mobx"

type FormValues = {
   name: string
   desc: string
   img: string
}

type Props = {
   authorLogin: string
   field: ReactNode
}

export const CreateStoryForm = observer(({ authorLogin, field }: Props) => {
   const methods = useForm<FormValues>()

   const { handleSubmit } = methods

   const {scenes} = storyCreationStore

   const onSubmit = (data: FormValues) => {
      console.log(data)
      console.log(toJS(scenes))
   }

   return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
         <div className={styles.top}>
            <FormProvider {...methods}>
               <TopSection authorLogin={authorLogin} />
            </FormProvider>
         </div>

         <ReactFlowProvider>{field}</ReactFlowProvider>

         <OpenPreviewBtn />
         <SubmitButton />
      </form>
   )
})
