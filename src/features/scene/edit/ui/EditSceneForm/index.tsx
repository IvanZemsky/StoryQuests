"use client"

import { TextInput, Textarea, ImageLoad } from "@/shared/ui"
import { Controller, useFormContext } from "react-hook-form"
import styles from "./styles.module.scss"
import { SceneNodeData } from "@/entities/Scene"
import { descOptinos, titleOptinos } from "../../model/registerOptions"

type Props = { data: SceneNodeData }

export const EditSceneForm = ({data}: Props) => {
   const { register, control, setValue } = useFormContext()

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
                  defaultValue={data.img}
                  onError={handleImgError}
                  className={styles.illustration}
                  {...field}
               />
            )}
         />
      </form>
   )
}
