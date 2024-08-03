import { EndSceneNode, SceneNode, StartSceneNode } from "@/src/entities/Scene"
import { NodeTypes } from "@xyflow/react"

export const nodeTypes: NodeTypes = {
   startScene: StartSceneNode,
   scene: SceneNode,
   endScene: EndSceneNode,
}
