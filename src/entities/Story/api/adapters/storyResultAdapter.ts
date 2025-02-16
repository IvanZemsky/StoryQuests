import { StoryResult } from "../../model/types"
import { GetStoryResultDto } from "../dto"

export const storyResultAdapter = (dto: GetStoryResultDto): StoryResult => {
   const { _id, ...resultData } = dto
   const { _id: sceneId, ...sceneData } = dto.scene
   return {
      id: _id,
      ...resultData,
      scene: { id: sceneId, ...sceneData },
   }
}
