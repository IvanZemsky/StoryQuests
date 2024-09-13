import { IApiScene } from "../types"
import { sceneAdapter } from "../adapters/sceneAdapter"
import { api, APIEndpoints } from "@/src/shared/api"

const {Scenes} = APIEndpoints

export const fetchScenesByStoryId = async (storyId: string) => {
   const {data} = await api.get<IApiScene[]>(Scenes, {
      params: {
         storyId
      }
   })
   console.log(data.map(scene => sceneAdapter(scene)))
   return data.map(scene => sceneAdapter(scene))
}