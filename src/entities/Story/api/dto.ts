import { z } from "zod"
import { ApiStorySchema } from "../model/schemas"

export type GetStoryDto = z.infer<typeof ApiStorySchema>

export type StoryPassesUpdateDto = {
   readonly storyId: string
   readonly passes: number
}

export type StoryLikeUpdateDto = {
   readonly storyId: string
   readonly isLiked: boolean
   readonly likes: number
}