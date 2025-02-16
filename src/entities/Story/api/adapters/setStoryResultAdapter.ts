import { SetStoryResult } from "../../model/types"
import { SetStoryResultDto } from "../dto"

export const setStoryResultAdapter = (dto: SetStoryResultDto): SetStoryResult => {
   const { _id, ...data } = dto
   return {
      id: _id,
      ...data,
   }
}
