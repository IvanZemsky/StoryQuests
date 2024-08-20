import { IAnswer } from "../../Answer"
import { Node, NodeProps } from "@xyflow/react"

export type SceneType = "default" | "end"

export interface IScene {
   id: string
   title: string
   description: string
   img: string | undefined
   type: SceneType
   answers: IAnswer[]
}

export interface ISceneNodeData extends Record<string, unknown> {
   title: string
   description: string
   img: string
   type: SceneType
}

export interface ISceneNode extends Node<ISceneNodeData> {}

export interface SceneNodeProps extends NodeProps<ISceneNode> {}
