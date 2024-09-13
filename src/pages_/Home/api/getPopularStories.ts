import { IStory } from "@/src/entities/Story"
import { storyAdapter } from "@/src/entities/Story/api/adapters/storyAdapter"
import { IApiStory } from "@/src/entities/Story/api/types"
import { api, APIEndpoints } from "@/src/shared/api"

const {Stories} = APIEndpoints

export const getPopularStories = async (limit: number): Promise<{
   stories: IStory[] | null
   error: string | null
}> => {
   try {
      const { data } = await api.get<IApiStory[]>(
         Stories,
         {
            params: {
               limit,
               order: "popular"
            }
         }
      )
      const stories = data.map((story) => storyAdapter(story))
      return { stories, error: null }
   } catch (error: any) {
      return {
         stories: null,
         error: error.message || "An error occurred while fetching stories.",
      }
   }
}
