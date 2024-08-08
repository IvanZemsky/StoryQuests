import { StaticImageData } from "next/image"
import { IAnswer } from "../../Answer"
import { Node } from "@xyflow/react"

export interface IScene {
   _id: string
   title: string
   description: string
   img: StaticImageData
   answers: IAnswer[]
}

export interface ISceneNode extends Node {
   data: {
      title: string
      description: string
   }
}

export interface ISceneData {
   title: string
   description: string
}
