import { ImageLoad, Textarea, TextInput } from "@/src/shared/ui"
import styles from "./TopFields.module.scss"
import { StoryCard } from "@/src/entities/Story"
import { Control, FieldValues, useWatch, UseFormRegisterReturn } from "react-hook-form"

interface Props {
   control: Control<FieldValues, any>
   nameInput: UseFormRegisterReturn<"name">
   descInput: UseFormRegisterReturn<"desc">
   imgInput: UseFormRegisterReturn<"img">
}

export const TopFields = ({ nameInput, descInput, imgInput, control }: Props) => {
   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   return (
      <div className={styles.top}>
         <div className={styles.inputs}>
            <TextInput {...nameInput} placeholder="Story name" counter maxLength={50} />
            <Textarea {...descInput} placeholder="Description" counter maxLength={115} />
            <ImageLoad {...imgInput} label="Illustration" className={styles.imageLoad} />
         </div>
         <StoryCard
            className={styles.preview}
            id={""}
            name={name}
            description={description}
            login={"Yourlogin"}
            imgLink={""}
            type="preview"
         />
      </div>
   )
}
