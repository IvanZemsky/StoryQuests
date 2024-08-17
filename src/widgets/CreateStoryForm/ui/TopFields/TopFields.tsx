"use client"

import { ImageLoad, Textarea, TextInput } from "@/src/shared/ui"
import styles from "./TopFields.module.scss"
import { StoryCard } from "@/src/entities/Story"
import {
   Control,
   FieldValues,
   useWatch,
   UseFormRegisterReturn,
   useForm,
   Controller,
} from "react-hook-form"

interface Props {
   nameInput: UseFormRegisterReturn<"name">
   descInput: UseFormRegisterReturn<"desc">
   imgInput: UseFormRegisterReturn<"img">
}

export const TopFields = ({ nameInput, descInput, imgInput }: Props) => {
   const { control, setValue } = useForm()

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const handleImgError = () => {
      setValue("img", "")
   }

   return (
      <div className={styles.top}>
         <div className={styles.inputs}>
            <TextInput {...nameInput} placeholder="Story name" counter maxLength={50} />
            <Textarea {...descInput} placeholder="Description" counter maxLength={200} />
            <Controller
               control={control}
               name="img"
               defaultValue=""
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
         <StoryCard
            className={styles.preview}
            id={""}
            name={name}
            description={description}
            login={"Yourlogin"}
            imgLink={img}
            type="preview"
         />
      </div>
   )
}
