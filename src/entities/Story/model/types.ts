import { StaticImageData } from "next/image"

export interface IStory {
   id: string
   name: string
   description: string
   img: StaticImageData
   scenes: IScene[]
}

export interface IScene {
   _id: string
   title: string
   description: string
   img: StaticImageData
   answers: IAnswer[]
}

export interface IAnswer {
   _id: string
   title: string
   nextSceneId: string
}
