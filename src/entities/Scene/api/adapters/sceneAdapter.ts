import { IScene } from "../../model/types"
import { IApiScene } from "../types"

export const sceneAdapter = (apiData: IApiScene): IScene => {
   return {
      id: apiData.sceneId,
      title: apiData.title,
      description: apiData.description,
      img: apiData.img,
      type: apiData.type,
      answers: apiData.answers,
   }
}