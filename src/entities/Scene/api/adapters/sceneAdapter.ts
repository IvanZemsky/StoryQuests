import { Scene } from "../../model/types"
import { GetSceneDto } from "../dto"

export const sceneAdapter = (dto: GetSceneDto): Scene => {
   const { _id, sceneId, ...data } = dto
   return {
      id: sceneId,
      ...data,
   }
}
