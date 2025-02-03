import { api, APIEndpoints } from "@/shared/api"
import { storyAdapter } from "./adapters/storyAdapter"
import { GetStoryDto, StoryLikeUpdateDto, StoryPassesUpdateDto } from "./dto"
import { Story, StoryFilters } from "../model/types"
import { setPath } from "@/shared/lib"
import { RawAxiosRequestHeaders } from "axios"
import { GetStoryDtoSchema } from "../model/schemas"
import { z } from "zod"

const { Stories, Passes, Like } = APIEndpoints

export const storyService = {
   async fetchStories(params: StoryFilters, options?: { cookie?: string }) {
      const headers: RawAxiosRequestHeaders = {}

      if (options?.cookie) {
         headers["Cookie"] = options.cookie
      }

      try {
         const response = await api.get<GetStoryDto[]>(Stories, {
            params: { ...params },
            headers,
         })

         const parsedData = z.array(GetStoryDtoSchema).safeParse(response.data)

         if (!parsedData.success) {
            console.error("Zod validation error:", parsedData.error)
         }

         const stories: Story[] = response.data.map((story: GetStoryDto) =>
            storyAdapter(story),
         )

         const totalCount = +response.headers["x-total-count"]

         let next: number | null = null
         if (stories.length > 0 && params.limit) {
            if (params.page === undefined) {
               next = 2
            } else if (totalCount > params.limit * params.page) {
               next = params.page + 1
            } else {
               next = null
            }
         }

         return {
            stories,
            totalCount,
            next,
         }
      } catch (error) {
         console.error(error)
         throw error
      }
   },

   async fetchStoryById(id: string, options?: { cookie?: string }) {
      const headers: RawAxiosRequestHeaders = {}

      console.log('storyService.fetchStoryById')

      if (options?.cookie) {
         headers["Cookie"] = options.cookie
      }

      try {
         const response = await api.get<GetStoryDto>(setPath(Stories, id), { headers })

         const parsed = GetStoryDtoSchema.safeParse(response.data)

         if (!parsed.success) {
            console.warn("Zod validation error:", parsed.error)
         }

         const story: Story = storyAdapter(response.data)
         return story
      } catch (error) {
         throw error
      }
   },

   async incrementStoryPasses(storyId: string) {
      try {
         const response = await api.patch<StoryPassesUpdateDto>(
            setPath(Stories, storyId, Passes),
         )
         return response.data
      } catch (error) {
         throw new Error()
      }
   },

   async toggleLike(storyId: string) {
      try {
         const response = await api.patch<StoryLikeUpdateDto>(
            setPath(Stories, storyId, Like),
         )
         return response.data
      } catch (error) {
         throw new Error()
      }
   },
}
