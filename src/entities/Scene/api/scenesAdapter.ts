import { IScene } from "../model/types"
import { IApiScenes } from "./types"

export const scenesAdapter = (apiData: IApiScenes): IScene[] => {
   return [...apiData.scenes]
}