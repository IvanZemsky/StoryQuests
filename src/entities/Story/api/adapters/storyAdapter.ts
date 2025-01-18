import { IStory } from "../../model/types"
import { ApiStory } from "../types"

export const storyAdapter = (apiData: ApiStory): IStory => {
   return {
      id: apiData._id,
      name: apiData.name,
      description: apiData.description,
      img: apiData.img,
      author: {
         id: apiData.author._id,
         login: apiData.author.login,
      },
      tags: apiData.tags,
      sceneCount: apiData.sceneCount,
      passes: apiData.passes,
      likes: apiData.likes,
      date: apiData.date,
   }
}
