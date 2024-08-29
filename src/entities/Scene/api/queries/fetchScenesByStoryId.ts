import axios from "axios"
import { IApiScene } from "../types"
import { sceneAdapter } from "../adapters/sceneAdapter"
import { API, APIEndpoints } from "@/src/shared/api"

const {Scenes} = APIEndpoints

export const fetchScenesByStoryId = async (storyId: string) => {
   const {data} = await axios.get<IApiScene[]>(`${API}${Scenes}`, {
      params: {
         storyId
      }
   })
   console.log(data.map(scene => sceneAdapter(scene)))
   return data.map(scene => sceneAdapter(scene))
}