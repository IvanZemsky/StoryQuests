import { storyService } from "@/entities/Story"
import { queryClient } from "@/shared/model"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

type LikeBtnState = {
   likes: number
   isLiked: boolean
}

export function useToggleLike(storyId: string, initialState: LikeBtnState) {
   const [likeBtnState, setLikeBtnState] = useState<LikeBtnState>(initialState)

   const toggleLikeState = () => {
      setLikeBtnState({
         likes: likeBtnState.isLiked ? likeBtnState.likes - 1 : likeBtnState.likes + 1,
         isLiked: !likeBtnState.isLiked,
      })
   }

   const toggleLikeMutation = useMutation({
      mutationFn: () => storyService.toggleLike(storyId),
      onMutate: () => {
         queryClient.cancelQueries({ queryKey: ["stories", "byId", storyId] })
      },
      onError: () => {
         setLikeBtnState(initialState)
      },
   })

   return {
      likeBtnState,
      toggleLikeMutation,
      toggleLikeState,
   }
}
