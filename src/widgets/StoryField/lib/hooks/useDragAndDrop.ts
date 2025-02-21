import { SceneNode } from "@/entities/Scene"
import { useReactFlow } from "@xyflow/react"
import { Dispatch, SetStateAction, useCallback } from "react"
import { DragEvent } from "react"
import { useSceneNumber } from "./useSceneNumber"
import { STORY_FIRST_SCENE } from "@/entities/Story"

export const useDragAndDrop = (setNodes: Dispatch<SetStateAction<SceneNode[]>>) => {
   const { screenToFlowPosition } = useReactFlow()
   const getId = useSceneNumber(+STORY_FIRST_SCENE)

   const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      event.dataTransfer.dropEffect = "move"
   }, [])

   const onDrop = useCallback(
      (event: DragEvent<HTMLDivElement>) => {
         event.preventDefault()

         const type = event.dataTransfer.getData("application/reactflow")

         if (!type) {
            return
         }

         const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
         })

         // for the simplicity, scene id equals scene number
         const sceneNodeId = getId()

         const newNode: SceneNode = {
            id: sceneNodeId,
            type,
            position,
            data: {
               number: sceneNodeId,
               title: "",
               description: "",
               img: "",
               type: type === "scene" ? "default" : "end",
            },
         }

         console.log(newNode.data.number)

         setNodes((nds: SceneNode[]) => nds.concat(newNode))
      },
      [screenToFlowPosition],
   )

   return [onDragOver, onDrop] as const
}
