import { IApScene } from "../types"
import { sceneAdapter } from "../adapters/sceneAdapter"
import { api, APIEndpoints } from "@/shared/api"

const {Scenes} = APIEndpoints

export const fetchScenesByStoryId = async (storyId: string) => {
   const {data} = await api.get<IApScene[]>(Scenes, {
      params: {
         storyId
      }
   })
   return data.map(scene => sceneAdapter(scene))
}