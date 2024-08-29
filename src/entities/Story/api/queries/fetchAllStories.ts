import axios from "axios"
import { storyAdapter } from "../adapters/storyAdapter"
import { IApiStory } from "../types"
import { API, APIEndpoints } from "@/src/shared/api"

const {Stories} = APIEndpoints

export const fetchAllStories = async () => {
   const {data} = await axios.get<IApiStory[]>(`${API}${Stories}`)
   return data.map(story => storyAdapter(story))
}