import { api, APIEndpoints } from "@/shared/api"
import { sceneAdapter } from "./adapters/sceneAdapter"
import { StoryId } from "@/entities/Story"
import { GetSceneDtoSchema } from "../model/schemas"
import { z } from "zod"
import { GetSceneDto } from "./dto"
import { setPath } from "@/shared/lib"
import { SceneId } from "../model/types"

const { Scenes, Results, Passes } = APIEndpoints

export const sceneService = {
   async fetchScenesByStoryId(storyId: StoryId) {
      const response = await api.get<GetSceneDto[]>(Scenes, {
         params: {
            storyId,
         },
      })

      const parsed = z.array(GetSceneDtoSchema).safeParse(response.data)

      if (!parsed.success) {
         console.warn("Zod validation error:", parsed.error)
      }

      console.log(response.data.map((scene) => sceneAdapter(scene)))
      return response.data.map((scene) => sceneAdapter(scene))
   },

   async fetchEndScenesByStoryId(storyId: StoryId) {
      const response = await api.get<GetSceneDto[]>(setPath(Scenes, storyId, Results))

      const parsed = z.array(GetSceneDtoSchema).safeParse(response.data)

      if (!parsed.success) {
         console.warn("Zod validation error:", parsed.error)
      }

      return response.data.map(scene => sceneAdapter(scene))
   },

   async incrementScenePasses(storyId: StoryId, sceneId: SceneId) {
      const response = await api.patch<GetSceneDto>(setPath(Scenes, storyId, Passes, sceneId))

      const parsed = GetSceneDtoSchema.safeParse(response.data)

      if (!parsed.success) {
         console.warn("Zod validation error:", parsed.error)
      }

      return sceneAdapter(response.data)
   }
}
