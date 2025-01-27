import { api, APIEndpoints } from "@/shared/api"
import { IApiScene } from "./types"
import { sceneAdapter } from "./adapters/sceneAdapter"

const { Scenes } = APIEndpoints

export const sceneService = {
   async fetchScenesByStoryId(storyId: string) {
      console.log(storyId)
      try {
         const response = await api.get<IApiScene[]>(Scenes, {
            params: {
               storyId,
            },
         })

         // const parsed = ApiSceneSchema.safeParse(response.data)

         // if (!parsed.success) {
         //    console.warn("Zod validation error:", parsed.error)
         // }

         return response.data.map((scene) => sceneAdapter(scene))
      } catch (error) {
         return null
      }
   },
}
