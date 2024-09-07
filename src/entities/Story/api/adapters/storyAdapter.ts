import { IStory } from "../../model/types"
import { IApiStory } from "../types"

export const storyAdapter = (apiData: IApiStory): IStory => {
   return {
      id: apiData._id,
      name: apiData.name,
      description: apiData.description,
      img: apiData.img,
      author: {
         id: apiData.author._id,
         login: apiData.author.login,
      },
      sceneCount: apiData.sceneCount,
      passes: apiData.passes,
      likes: apiData.likes,
      date: apiData.date,
   }
}
