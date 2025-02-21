import { api, APIEndpoints } from "@/shared/api"
import { sceneAdapter } from "./adapters/sceneAdapter"
import { StoryId } from "@/entities/Story"
import { GetSceneDtoSchema } from "../model/schemas"
import { z } from "zod"
import { GetSceneDto } from "./dto"
import { logParsing, setPath } from "@/shared/lib"
import { SceneId, SceneNumber } from "../model/types"

const { Stories, Scenes, Results, Passes } = APIEndpoints

export const sceneService = {
   async fetchScenesByStoryId(storyId: StoryId) {
      const response = await api.get<GetSceneDto[]>(setPath(Stories, storyId, Scenes))

      logParsing(z.array(GetSceneDtoSchema), response.data)

      return response.data.map((scene) => sceneAdapter(scene))
   },

   async fetchEndScenesByStoryId(storyId: StoryId) {
      const response = await api.get<GetSceneDto[]>(
         setPath(Stories, storyId, Results),
      )

      logParsing(z.array(GetSceneDtoSchema), response.data)
      
      return response.data.map((scene) => sceneAdapter(scene))
   },

   async incrementScenePasses(storyId: StoryId, sceneNumber: SceneNumber) {
      const response = await api.patch<GetSceneDto>(
         setPath(Stories, storyId, Passes, sceneNumber),
      )

      logParsing(GetSceneDtoSchema, response.data)

      return sceneAdapter(response.data)
   },
}
