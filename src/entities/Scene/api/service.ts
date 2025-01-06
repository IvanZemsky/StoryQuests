import { api, APIEndpoints } from "@/shared/api"
import { IApiScene } from "./types"
import { sceneAdapter } from "./adapters/sceneAdapter"

const { Scenes } = APIEndpoints

export const sceneService = {
   async fetchScenesByStoryId(storyId: string) {
      try {
         const { data } = await api.get<IApiScene[]>(Scenes, {
            params: {
               storyId,
            },
         })
         return data.map((scene) => sceneAdapter(scene))
      } catch (error) {
         return null
      }
   },
}
