"use client"

import { ImageLoad, Textarea, TextInput } from "@/shared/ui"
import styles from "./styles.module.scss"
import { StoryCard } from "@/entities/Story"
import { useWatch, useForm, Controller } from "react-hook-form"
import { getCardData } from "../../model/lib/getCardData"

export const CreateStoryForm = () => {
   const { register, control, setValue } = useForm()

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const cardData = getCardData(name, description, img)

   const handleImgError = () => {
      setValue("img", "")
   }

   return (
      <div className={styles.top}>
         <div className={styles.inputs}>
            <TextInput
               {...register("name")}
               placeholder="Story name"
               counter
               maxLength={50}
            />
            <Textarea
               {...register("desc")}
               placeholder="Description"
               counter
               maxLength={200}
            />
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
         <StoryCard className={styles.preview} data={cardData} type="preview" />
      </div>
   )
}
