import { api, APIEndpoints } from "@/shared/api"
import { storyAdapter } from "./adapters/storyAdapter"
import { ApiStory, StoryPassesUpdateDto } from "./types"
import { StoryFilters } from "../model/types"
import { setPath } from "@/shared/lib"

const { Stories, Passes } = APIEndpoints

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

   async fetchStoryById(id: string) {
      try {
         const response = await api.get<ApiStory>(setPath(Stories, id))
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
}
