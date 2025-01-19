"use client"

import HeartIcon from "@/shared/assets/icons/heart.svg"
import styles from "./styles.module.scss"
import cn from "classnames"
import { useToggleLike } from "../lib/useToggleLike"

type Props = {
   storyId: string
   likes: number
   isLiked?: boolean
   disabled?: boolean
   className?: string
}

export const LikeStoryBtn = ({
   storyId,
   likes,
   disabled = false,
   isLiked = false,
   className,
}: Props) => {
   const { toggleLikeMutation, likeBtnState, toggleLikeState } = useToggleLike(storyId, {
      likes,
      isLiked,
   })

   const handleLikeBtnClick = () => {
      toggleLikeMutation.mutate()
      toggleLikeState()
   }

   return (
      <div className={cn(styles.wrap, className)}>
         <button
            className={cn({ [styles.liked]: likeBtnState.isLiked })}
            disabled={disabled || toggleLikeMutation.isPending}
            onClick={handleLikeBtnClick}
         >
            <HeartIcon />
         </button>
         <p>{likeBtnState.likes}</p>
      </div>
   )
}
