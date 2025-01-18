"use client"

import { ImageLoad, Textarea, TextInput } from "@/shared/ui"
import styles from "./styles.module.scss"
import { StoryCard } from "@/entities/Story"
import { useWatch, useForm, Controller } from "react-hook-form"
import { getCardData } from "../../model/lib/getCardData"

type FormValues = {
   name: string
   desc: string
   img: string
}

export const CreateStoryForm = ({ authorLogin }: { authorLogin: string }) => {
   const { register, control, setValue } = useForm<FormValues>()

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const cardData = getCardData({ name, description, img, authorLogin })

   const handleImgError = () => {
      setValue("img", "")
   }

   return (
      <div className={styles.top}>
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
