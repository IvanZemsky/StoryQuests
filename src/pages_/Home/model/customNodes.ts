
import { BaseStartSceneNode, BaseSceneNode, BaseEndSceneNode } from "@/entities/Scene"
import { NodeTypes } from "@xyflow/react"

export const nodeTypes: NodeTypes = {
   startScene: BaseStartSceneNode,
   scene: BaseSceneNode,
   endScene: BaseEndSceneNode,
}
