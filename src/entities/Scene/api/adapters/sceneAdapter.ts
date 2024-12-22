import { Scene } from "../../model/types"
import { IApScene } from "../types"

export const sceneAdapter = (apiData: IApScene): Scene => {
   return {
      id: apiData.sceneId,
      title: apiData.title,
      description: apiData.description,
      img: apiData.img,
      type: apiData.type,
      answers: apiData.answers,
   }
}