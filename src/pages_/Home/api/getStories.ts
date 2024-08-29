import { IStory } from "@/src/entities/Story"
import { storyAdapter } from "@/src/entities/Story/api/adapters/storyAdapter"
import { IApiStory } from "@/src/entities/Story/api/types"
import { API, APIEndpoints } from "@/src/shared/api"
import axios from "axios"

const {Stories} = APIEndpoints

export const getStories = async (): Promise<{
   stories: IStory[] | null
   error: string | null
}> => {
   try {
      const { data } = await axios.get<IApiStory[]>(
         `${API}${Stories}`,
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
