import { z } from "zod"
import { storyOrderBySchema, storySearchParamsSchema, storySortByLengthSchema } from "./schemas"

export interface IStory {
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
   date: string
}

export type SortByScenesAmount = z.infer<typeof storySortByLengthSchema>
export type OrderBy = z.infer<typeof storyOrderBySchema>

export type StoryFiltersParams = z.infer<typeof storySearchParamsSchema>

export type StoryFilters = StoryFiltersParams &{
   limit: number
}

export type StorySearchResult = {
   stories: IStory[]
   totalCount: number
}
