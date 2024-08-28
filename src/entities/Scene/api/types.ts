import { IScene } from "../model/types"

export interface IApiScenes {
   _id: string
   storyId: string
   scenes: IScene[]
}