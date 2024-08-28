import axios from "axios"
import { IApiScenes } from "../types"
import { scenesAdapter } from "../scenesAdapter"

export const fetchScenesByStoryId = async (storyId: string) => {
   const {data} = await axios.get<IApiScenes>("https://story-quests-backend.onrender.com/scenes", {
      params: {
         storyId
      }
   })
   return scenesAdapter(data)
}