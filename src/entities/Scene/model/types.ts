import { StaticImageData } from "next/image"
import { IAnswer } from "../../Answer"
import { Node, NodeProps } from "@xyflow/react"

export interface IScene {
   id: string
   title: string
   description: string
   img: StaticImageData | string
   answers: IAnswer[]
}

export interface ISceneNodeData extends Record<string, unknown> {
   title: string
   description: string
   img: string
}

export interface ISceneNode extends Node<ISceneNodeData> {}

export interface SceneNodeProps extends NodeProps<ISceneNode> {}
