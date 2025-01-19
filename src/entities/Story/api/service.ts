import { api, APIEndpoints } from "@/shared/api"
import { storyAdapter } from "./adapters/storyAdapter"
import { ApiStory, StoryLikeUpdateDto, StoryPassesUpdateDto } from "./types"
import { StoryFilters } from "../model/types"
import { setPath } from "@/shared/lib"
import { RawAxiosRequestHeaders } from "axios"

const { Stories, Passes, Like } = APIEndpoints

export const storyService = {
   async fetchStories(params: StoryFilters) {
      try {
         const response = await api.get<ApiStory[]>(Stories, {
            params: { ...params },
         })

         const totalCount = +response.headers["x-total-count"]
         const stories = response.data.map((story: ApiStory) => storyAdapter(story))

         return {
            stories,
            totalCount,
         }
      } catch (error) {
         return null
      }
   },

   async fetchStoryById(id: string, options?: { cookie?: string }) {
      const headers: RawAxiosRequestHeaders = {}

      if (options?.cookie) {
         headers["Cookie"] = options.cookie
      }

      try {
         const response = await api.get<ApiStory>(setPath(Stories, id), { headers })
         const story = storyAdapter(response.data)
         return story
      } catch (error) {
         return null
      }
   },

   async incrementStoryPasses(storyId: string) {
      try {
         const response = await api.patch<StoryPassesUpdateDto>(
            setPath(Stories, storyId, Passes),
         )
         return response.data
      } catch (error) {
         return null
      }
   },

   async toggleLike(storyId: string) {
      try {
         const response = await api.patch<StoryLikeUpdateDto>(setPath(Stories, storyId, Like))
         return response.data
      } catch (error) {
         return null
      }
   },
}
