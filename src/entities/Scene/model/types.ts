import { StoryId } from "@/entities/Story"
import { Answer } from "../../Answer"
import { Node, NodeProps } from "@xyflow/react"
import { z } from "zod"
import { SceneTypeSchema } from "./schemas"

export type SceneType = z.infer<typeof SceneTypeSchema>

export type SceneId = string
export type SceneNumber = string

export type Scene = {
   id: SceneId
   storyId: StoryId
   number: SceneNumber
   type: SceneType
   answers: Answer[] | null
   title: string
   description: string
   img: string
   passes?: number
}

export type SceneNodeData = {
   title: string
   description: string
   img: string
   type: SceneType
   number: string
} & Record<string, unknown>

export type SceneNode = Node<SceneNodeData>

export type SceneNodeProps = NodeProps<SceneNode>
