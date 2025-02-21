import { Scene } from "../../model/types"
import { GetSceneDto } from "../dto"

export const sceneAdapter = (dto: GetSceneDto): Scene => {
   const { _id, ...data } = dto
   
   return {
      id: _id,
      ...data,
   }
}
