"use client"

import { StoryCard } from "@/entities/Story"
import { useWatch } from "react-hook-form"
import { LikeStoryBtn } from "@/features/story/like/ui"
import { getCardData } from "../../model/lib/getCardData"
import { InfoFields } from "../InfoFields"
import styles from "./styles.module.scss"

type Props = {
   authorLogin: string
}

export const TopSection = ({authorLogin}: Props) => {
   const {control} = useWatch()

   const name = useWatch({ control, name: "name" })
   const description = useWatch({ control, name: "desc" })
   const img = useWatch({ control, name: "img" })

   const cardData = getCardData({ name, description, img, authorLogin })

   return (
      <div className={styles.top}>
         <InfoFields />

         <StoryCard
            className={styles.preview}
            data={cardData}
            type="preview"
            likeBtn={<LikeStoryBtn storyId="" likes={cardData.likes} disabled />}
         />
      </div>
   )
}
