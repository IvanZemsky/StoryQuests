import { z } from "zod"
import {
   storyOrderBySchema,
   storySearchParamsSchema,
   storySortByLengthSchema,
} from "./schemas"

export type Story = {
   id: string
   name: string
   description: string
   img: string
   author: {
      id: string
      login: string
   }
   tags: string[]
   sceneCount: number
   passes: number
   likes: number
   isLiked: boolean
   date: string
}

export type SortByScenesAmount = z.infer<typeof storySortByLengthSchema>
export type OrderBy = z.infer<typeof storyOrderBySchema>

export type StoryFiltersParams = z.infer<typeof storySearchParamsSchema>

export type StoryFilters = StoryFiltersParams & {
   limit?: number
   byUser?: string
}

export type StorySearchResult = {
   stories: Story[]
   totalCount: number
}
