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
import { useCallback, useState } from "react"

import "@xyflow/react/dist/style.css"
import { nodeTypes } from "../model/customNodes"

const initialNodes: Node[] = [
   { id: "1", type: 'startScene', position: { x: 0, y: 0 }, data: { text: 'Title of scene' }, },
   { id: "2", type: 'scene', position: { x: 0, y: 100 }, data: { text: 'Title of scene' }, },
   { id: "3", type: 'endScene', position: { x: 100, y: 125 }, data: { text: 'End' }, },
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
               nodeTypes={nodeTypes}
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
