import { api, APIEndpoints } from "@/shared/api"
import { storyAdapter } from "./adapters/storyAdapter"
import { GetStoryDto, StoryLikeUpdateDto, StoryPassesUpdateDto } from "./dto"
import { Story, StoryFilters } from "../model/types"
import { setPath } from "@/shared/lib"
import { RawAxiosRequestHeaders } from "axios"
import { ApiStorySchema } from "../model/schemas"
import { z, ZodError } from "zod"

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

         const parsedData = z.array(ApiStorySchema).parse(response.data)
         const stories: Story[] = parsedData.map((story: GetStoryDto) =>
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
         if (error instanceof ZodError) {
            throw error
         }
         throw new Error()
      }
   },

   async fetchStoryById(id: string, options?: { cookie?: string }): Promise<Story> {
      const headers: RawAxiosRequestHeaders = {}

      if (options?.cookie) {
         headers["Cookie"] = options.cookie
      }

      try {
         const response = await api.get<GetStoryDto>(setPath(Stories, id), { headers })

         const parsedData = ApiStorySchema.parse(response.data)
         const story: Story = storyAdapter(parsedData)
         
         return story
      } catch (error) {
         console.error(error)

         if (error instanceof ZodError) {
            throw new Error()
         }

         throw new Error()
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
