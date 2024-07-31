import { StaticImageData } from "next/image"
import { IAnswer } from "../../Answer"

export interface IScene {
   _id: string
   title: string
   description: string
   img: StaticImageData
   answers: IAnswer[]
}