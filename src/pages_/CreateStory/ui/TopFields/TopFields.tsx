"use client"

import { ImageLoad, Textarea, TextInput } from "@/shared/ui"
import styles from "./styles.module.scss"
import { IStory, StoryCard } from "@/entities/Story"
import {
   useWatch,
   UseFormRegisterReturn,
   useForm,
   Controller,
   Control,
   FieldValues,
} from "react-hook-form"

type Props = {
   control: Control<FieldValues, any>
   nameInput: UseFormRegisterReturn<"name">
   descInput: UseFormRegisterReturn<"desc">
   imgInput: UseFormRegisterReturn<"img">
}

export const TopFields = ({ control, nameInput, descInput, imgInput }: Props) => {
   const { setValue } = useForm()

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const cardData: IStory = {
      id: "",
      name: name || "Name of the story",
      description: description || "Description",
      img,
      author: {
         id: "",
         login: "YourLogin"
      },
      tags: [],
      sceneCount: 0,
      passes: 345,
      likes: 100,
      date: ""
   }

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
            data={cardData}
            type="preview"
         />
      </div>
   )
}
