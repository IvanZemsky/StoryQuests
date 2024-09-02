import axios from "axios"
import { storyAdapter } from "../adapters/storyAdapter"
import { IApiStory } from "../types"
import { API, APIEndpoints } from "@/src/shared/api"

const {Stories} = APIEndpoints

export const fetchStories = async (limit?: number, page?: number) => {
   const {data} = await axios.get<IApiStory[]>(`${API}${Stories}`, {
      params: {
         limit
      }
   })
   return data.map(story => storyAdapter(story))
}