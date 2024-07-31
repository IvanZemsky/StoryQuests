import { StaticImageData } from "next/image"
import { IScene } from "../../Scene/index"

export interface IStory {
   id: string
   name: string
   description: string
   img: StaticImageData
   scenes: IScene[]
}
