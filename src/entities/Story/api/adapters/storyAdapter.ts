import { Story } from "../../model/types"
import { ApiStory } from "../types"

export const storyAdapter = (apiData: ApiStory): Story => {
   return {
      id: apiData._id,
      name: apiData.name,
      description: apiData.description,
      img: apiData.img,
      author: {
         id: apiData.author._id,
         login: apiData.author.login,
      },
      isLiked: apiData.isLiked,
      tags: apiData.tags,
      sceneCount: apiData.sceneCount,
      passes: apiData.passes,
      likes: apiData.likes,
      date: apiData.date,
   }
}
