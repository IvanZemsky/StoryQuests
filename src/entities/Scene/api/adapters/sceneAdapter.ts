import { Scene } from "../../model/types"
import { IApiScene } from "../types"

export const sceneAdapter = (apiData: IApiScene): Scene => {
   return {
      id: apiData.sceneId,
      title: apiData.title,
      description: apiData.description,
      img: apiData.img,
      type: apiData.type,
      storyId: apiData.storyId,
      answers: apiData.answers,
   }
}