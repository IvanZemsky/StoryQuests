import { StaticImageData } from "next/image"
import { IAnswer } from "../../Answer"
import { Node, NodeProps } from "@xyflow/react"

export interface IScene {
   _id: string
   title: string
   description: string
   img: StaticImageData
   answers: IAnswer[]
}

export interface ISceneNode extends Node<ISceneData> {}

export interface ISceneData extends Record<string, unknown> {
   title: string
   description: string
}

export interface SceneProps extends NodeProps<ISceneNode> {}
