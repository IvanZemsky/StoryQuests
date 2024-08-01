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
   ControlButton,
} from "@xyflow/react"
import styles from "./StoryField.module.scss"
import { useEffect, useCallback, useState } from "react"

import "@xyflow/react/dist/style.css"

const initialNodes: Node[] = [
   { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
]
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }]

export const StoryField = () => {
   const [fullScreenMode, setFullScreenMode] = useState(false)

   const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes)
   const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges)

   const handleConnect = useCallback(
      (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
      [setEdges],
   )

   const handleFullScreenClick = () => {
      setFullScreenMode(!fullScreenMode)
   }

   return (
      <div
         className={[styles.content, fullScreenMode && styles.fullScreenMode].join(" ")}
      >
         <h2 className={styles.title}>Tree</h2>
         <div className={styles.field}>
            <ReactFlow
               onNodesChange={onNodesChange}
               onEdgesChange={onEdgesChange}
               onConnect={handleConnect}
               nodes={nodes}
               edges={edges}
               fitView
            >
               <Controls
                  className={styles.controls}
                  showInteractive={false}
               >
                  <ControlButton onClick={handleFullScreenClick}>h</ControlButton>
               </Controls>
               <Background className={styles.background}/>
            </ReactFlow>
         </div>
      </div>
   )
}
