import { IAnswer } from "../../Answer"
import { SceneType } from "../model/types"

export interface IApScene {
   _id: string
   sceneId: string
   storyId: string
   title: string
   description: string
   img: string
   type: SceneType
   answers: IAnswer[]
}