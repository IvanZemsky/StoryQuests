import axios from "axios"
import { storyAdapter } from "../storyAdapter"
import { IApiStory } from "../types"

export const fetchAllStories = async () => {
   const {data} = await axios.get<IApiStory[]>('https://story-quests-backend.onrender.com/stories')
   return data.map(story => storyAdapter(story))
}