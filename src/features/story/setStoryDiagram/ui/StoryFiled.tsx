"use client"

import {
   ReactFlow,
   Controls,
   Background,
   addEdge,
   Connection,
   Edge,
   Node,
   useEdgesState,
   useNodesState,
} from "@xyflow/react"
import styles from "./StoryField.module.scss"
import { useCallback, useEffect, useState } from "react"

import "@xyflow/react/dist/style.css"
import { nodeTypes } from "../model/customNodes"
import { FullScreenBtn } from "@/src/shared/ui/FullScreenBtn/FullScreenBtn"
import { edgeTypes } from "../model/customEdges"
import { ScenePanel } from '@/src/entities/Scene/ui/ScenePanel/ScenePanel';
import { useDragAndDrop } from "../lib/hooks/useDragAndDrop"
import { ISceneNode, storyCreationStore } from "@/src/entities/Scene"

const initialNodes: ISceneNode[] = [
   {
      id: "1",
      type: "startScene",
      position: { x: 0, y: 0 },
      data: { title: "", description: "", img: "" },
   },
]

const {saveNodes, saveEdges} = storyCreationStore

export const StoryField = () => {
   const [fullScreenMode, setFullScreenMode] = useState(false)

   const [nodes, setNodes, onNodesChange] = useNodesState<ISceneNode>(initialNodes)
   const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])

   const [onDragOver, onDrop] = useDragAndDrop(setNodes)

   const onConnect = useCallback(
      (params: Edge | Connection) => 
         setEdges((eds) =>
            addEdge({ ...params, data: {}, animated: true, type: "storyEdge" }, eds)
         ),
      [setEdges],
   )

   useEffect(() => {
      saveNodes(nodes)
   }, [nodes])

   useEffect(() => {
      saveEdges(edges)
   }, [edges])

   const handleFullScreenClick = () => {
      setFullScreenMode(!fullScreenMode)
   }

   return (
      <div
         className={[styles.content, fullScreenMode && styles.fullScreenMode].join(" ")}
      >
         <h2 className={styles.title}>Tree</h2>
         <div className={styles.field}>
            <ScenePanel/>
            <ReactFlow
               onNodesChange={onNodesChange}
               onEdgesChange={onEdgesChange}
               onConnect={onConnect}
               nodes={nodes}
               nodeTypes={nodeTypes}
               edgeTypes={edgeTypes}
               edges={edges}
               onDrop={onDrop}
               onDragOver={onDragOver}
               fitView
            >
               <Controls className={styles.controls} showInteractive={false}>
                  <FullScreenBtn onClick={handleFullScreenClick} />
               </Controls>
               <Background className={styles.background} />
            </ReactFlow>
         </div>
      </div>
   )
}
