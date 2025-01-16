import { api, APIEndpoints } from "@/shared/api"
import { storyAdapter } from "./adapters/storyAdapter"
import { IApiStory } from "./types"
import { StoryFilters } from "../model/types"
import { setPath } from "@/shared/lib"

const { Stories } = APIEndpoints

export const storyService = {
   async fetchStories(params: StoryFilters) {
      try {
         const response = await api.get<IApiStory[]>(Stories, {
            params: { ...params },
         })

         const totalCount = +response.headers["x-total-count"]
         const stories = response.data.map((story: IApiStory) => storyAdapter(story))

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
         const response = await api.get<IApiStory>(setPath(Stories, id))
         const story = storyAdapter(response.data)
         return story
      } catch (error) {
         return null
      }
   }
}
