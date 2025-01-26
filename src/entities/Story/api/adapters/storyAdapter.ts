import { Story } from "../../model/types"
import { GetStoryDto } from "../dto"

export const storyAdapter = (dto: GetStoryDto): Story => {
   const { _id, ...story } = dto
   const { _id: authorId, ...author } = dto.author
   return {
      id: _id,
      ...story,
      author: { ...author, id: authorId },
   }
}
