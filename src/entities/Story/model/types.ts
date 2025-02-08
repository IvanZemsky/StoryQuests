import { z } from "zod"
import {
   StoryOrderBySchema,
   StorySearchParamsSchema,
   StorySortByLengthSchema,
} from "./schemas"

export type StoryId = string

export type Story = {
   id: StoryId
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

export type SortByScenesAmount = z.infer<typeof StorySortByLengthSchema>
export type OrderBy = z.infer<typeof StoryOrderBySchema>

export type StoryFiltersParams = z.infer<typeof StorySearchParamsSchema>

export type StoryFilters = StoryFiltersParams & {
   limit?: number
   byUser?: string
}

export type StorySearchResult = {
   stories: Story[]
   totalCount: number
}
