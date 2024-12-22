import { EndSceneNode, SceneNodeItem, StartSceneNode } from "@/entities/Scene"
import { NodeTypes } from "@xyflow/react"

export const nodeTypes: NodeTypes = {
   startScene: StartSceneNode,
   scene: SceneNodeItem,
   endScene: EndSceneNode,
}
