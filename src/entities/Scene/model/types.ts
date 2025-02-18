import { StoryId } from "@/entities/Story"
import { Answer } from "../../Answer"
import { Node, NodeProps } from "@xyflow/react"
import { z } from "zod"
import { SceneTypeSchema } from "./schemas"

export type SceneType = z.infer<typeof SceneTypeSchema>

export type SceneId = string

export type Scene = {
   id: SceneId
   title: string
   description: string
   img: string
   type: SceneType
   storyId: StoryId
   answers: Answer[] | null
   passes?: number
}

export type SceneNodeData = {
   title: string
   description: string
   img: string
   type: SceneType
} & Record<string, unknown>

export type SceneNode = Node<SceneNodeData>

export type SceneNodeProps = NodeProps<SceneNode>
