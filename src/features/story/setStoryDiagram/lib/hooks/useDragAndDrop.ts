import { ISceneNode } from "@/src/entities/Scene";
import { useReactFlow, Node } from "@xyflow/react"
import { Dispatch, SetStateAction, useCallback } from "react"
import { DragEvent } from "react"

let id = 1;
const getId = () => `node_${id++}`;

export const useDragAndDrop = (setNodes: Dispatch<SetStateAction<ISceneNode[]>>) => {
   const { screenToFlowPosition } = useReactFlow()

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

         const newNode: ISceneNode = {
            id: getId(),
            type,
            position,
            data: {
               title: "",
               description: "",
               img: "",
            },
         }

         setNodes((nds: ISceneNode[]) => nds.concat(newNode))
      },
      [screenToFlowPosition],
   )

   return [onDragOver, onDrop] as const
}
