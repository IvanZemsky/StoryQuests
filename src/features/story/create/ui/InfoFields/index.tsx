"use client"

import { ImageLoad, Textarea, TextInput } from "@/shared/ui"
import { Controller, useFormContext } from "react-hook-form"
import styles from "./styles.module.scss"

export const InfoFields = () => {
   const { setValue, register, control } = useFormContext()

   const handleImgError = () => {
      setValue("img", "")
   }

   return (
      <div className={styles.inputs}>
         <TextInput
            {...register("name", { maxLength: 50 })}
            placeholder="Story name"
            counter
            maxLength={50}
         />
         <Textarea
            {...register("desc", { maxLength: 200 })}
            placeholder="Description"
            counter
            maxLength={200}
         />
         <Controller
            control={control}
            name="img"
            render={({ field }) => (
               <ImageLoad
                  label="Cover"
                  onError={handleImgError}
                  className={styles.imageLoad}
                  {...field}
               />
            )}
         />
      </div>
   )
}
