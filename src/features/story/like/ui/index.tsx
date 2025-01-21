"use client"

import HeartIcon from "@/shared/assets/icons/heart.svg"
import styles from "./styles.module.scss"
import cn from "classnames"
import { useToggleLike } from "../lib/useToggleLike"
import { AuthModal, useSessionQuery } from "@/entities/User"
import { setModal } from "@/shared/lib"
import { Modals } from "@/shared/model"

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
   const { data, isError } = useSessionQuery()
   const { toggleLikeMutation, likeBtnState, toggleLikeState } = useToggleLike(storyId, {
      likes,
      isLiked,
   })

   const openModal = setModal(Modals.AuthModal, storyId)

   const handleLikeBtnClick = () => {
      if (!data) {
         openModal()
         return
      }
      toggleLikeMutation.mutate()
      toggleLikeState()
   }

   const disabledBtn = disabled || toggleLikeMutation.isPending

   return (
      <div className={cn(styles.wrap, className)}>
         <button
            className={cn({ [styles.liked]: likeBtnState.isLiked })}
            disabled={disabledBtn}
            onClick={handleLikeBtnClick}
         >
            <HeartIcon />
         </button>
         <p>{likeBtnState.likes}</p>
         <AuthModal id={storyId}/>
      </div>
   )
}
