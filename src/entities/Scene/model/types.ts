import { IAnswer } from "../../Answer"
import { Node, NodeProps } from "@xyflow/react"

export type SceneType = "default" | "end"

export type Scene = {
   id: string
   title: string
   description: string
   img: string
   type: SceneType
   storyId: string
   answers: IAnswer[]
}

export type SceneNodeData = {
   title: string
   description: string
   img: string
   type: SceneType
} & Record<string, unknown>

export type SceneNode = {} & Node<SceneNodeData>

export type SceneNodeProps = {} & NodeProps<SceneNode>
