"use client"

import { TextInput, Textarea, ImageLoad } from "@/shared/ui"
import { Controller, useFormContext } from "react-hook-form"
import styles from "./styles.module.scss"
import { SceneNodeData } from "@/entities/Scene"
import { descOptinos, titleOptinos } from "../../model/registerOptions"
import { observer } from "mobx-react"

type Props = { data: SceneNodeData }

export const EditSceneForm = observer(({ data }: Props) => {
   const { register, control, setValue, getValues } = useFormContext()

   console.log(data.img)

   const imgInput = getValues("img")
   const titleInput = register("title", titleOptinos)
   const descInput = register("desc", descOptinos)

   const handleImgError = () => {
      setValue("img", "")
   }

   return (
      <form className={styles.form}>
         <TextInput
            {...titleInput}
            className={styles.titleInput}
            counter
            maxLength={titleOptinos.maxLength as number}
            placeholder="Title"
            value={data.title}
         />

         <Textarea
            {...descInput}
            className={styles.descInput}
            counter
            maxLength={descOptinos.maxLength}
            placeholder="Description"
            value={data.description}
         />

         <Controller
            control={control}
            name="img"
            render={({ field }) => (
               <ImageLoad
                  label="Illustration"
                  onError={handleImgError}
                  className={styles.illustration}
                  {...field}
                  defaultValue={data.img}
               />
            )}
         />
      </form>
   )
})
