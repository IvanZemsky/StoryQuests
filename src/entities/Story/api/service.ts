import { api, APIEndpoints } from "@/shared/api"
import { storyAdapter } from "./adapters/storyAdapter"
import { GetStoryDto, StoryLikeUpdateDto, StoryPassesUpdateDto } from "./dto"
import { Story, StoryFilters, StoryId } from "../model/types"
import { setPath } from "@/shared/lib"
import { RawAxiosRequestHeaders } from "axios"
import { GetStoryDtoSchema } from "../model/schemas"
import { z } from "zod"
import { UserId } from "@/entities/User"

const { Stories, Passes, Like, Results } = APIEndpoints

export const storyService = {
   async fetchStories(params: StoryFilters, options?: { cookie?: string }) {
      const headers: RawAxiosRequestHeaders = {}

      if (options?.cookie) {
         headers["Cookie"] = options.cookie
      }

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
   },

   async fetchStoryById(id: StoryId, options?: { cookie?: string }) {
      const headers: RawAxiosRequestHeaders = {}

      console.log("storyService.fetchStoryById")

      if (options?.cookie) {
         headers["Cookie"] = options.cookie
      }

      const response = await api.get<GetStoryDto>(setPath(Stories, id), { headers })

      const parsed = GetStoryDtoSchema.safeParse(response.data)

      if (!parsed.success) {
         console.warn("Zod validation error:", parsed.error)
      }

      const story: Story = storyAdapter(response.data)
      return story
   },

   async incrementStoryPasses(storyId: string) {
      const response = await api.patch<StoryPassesUpdateDto>(
         setPath(Stories, storyId, Passes),
      )
      return response.data
   },

   async toggleLike(storyId: StoryId) {
      const response = await api.patch<StoryLikeUpdateDto>(
         setPath(Stories, storyId, Like),
      )

      return response.data
   },

   async setStoryInfo(options: {
      storyId: StoryId
      userId: UserId
      resultSceneId: string
   }) {
      const { storyId, userId, resultSceneId } = options
      const response = await api.put(setPath(Stories, storyId, Results), {
         userId,
         resultSceneId,
         datetime: new Date().toISOString(),
      })
      return response.data
   },

   async fetchResult(options: {
      storyId: StoryId
      userId: UserId
   }) {
      const { storyId, userId } = options
      const response = await api.get(setPath(Stories, storyId, Results, userId))
      return response.data
   }
}
