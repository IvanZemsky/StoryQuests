import { NodeTypes } from "@xyflow/react"
import { SceneNodeItem } from "../ui/nodes/SceneNode"
import { EndSceneNode } from "../ui/nodes/EndSceneNode"
import { StartSceneNode } from "../ui/nodes/StartSceneNode"

export const nodeTypes: NodeTypes = {
   startScene: StartSceneNode,
   scene: SceneNodeItem,
   endScene: EndSceneNode,
}
