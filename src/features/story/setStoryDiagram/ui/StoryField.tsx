"use client"

import {
   Controls,
   Background,
   addEdge,
   Connection,
   Edge,
   useEdgesState,
   useNodesState,
} from "@xyflow/react"
import styles from "./StoryField.module.scss"
import { useCallback, useEffect, useState } from "react"

import "@xyflow/react/dist/style.css"
import { nodeTypes } from "../model/customNodes"
import { FullScreenBtn } from "@/src/shared/ui/FullScreenBtn/FullScreenBtn"
import { edgeTypes } from "../model/customEdges"
import { ScenePanel } from "@/src/entities/Scene/ui/ScenePanel/ScenePanel"
import { useDragAndDrop } from "../lib/hooks/useDragAndDrop"
import { BaseStoryField, storyCreationStore } from "@/src/entities/Story"
import { ISceneNode } from "@/src/entities/Scene/model/types"
import { IAnswerEdge } from "@/src/entities/Answer"

const initialNodes: ISceneNode[] = [
   {
      id: "scene_1",
      type: "startScene",
      position: { x: 0, y: 0 },
      data: { title: "", description: "", img: "", type: "default" },
   },
]

const { saveNodes, saveEdges } = storyCreationStore

export const StoryField = () => {
   const [fullScreenMode, setFullScreenMode] = useState(false)

   const [nodes, setNodes, onNodesChange] = useNodesState<ISceneNode>(initialNodes)
   const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])

   const [onDragOver, onDrop] = useDragAndDrop(setNodes)

   const onConnect = useCallback(
      (params: Edge | Connection) =>
         setEdges((eds) =>
            addEdge(
               { ...params, data: { text: "" }, animated: true, type: "storyEdge" },
               eds,
            ),
         ),
      [setEdges],
   )

   useEffect(() => {
      saveNodes(nodes)
   }, [nodes])

   useEffect(() => {
      saveEdges(edges as IAnswerEdge[])
   }, [edges])

   const handleFullScreenClick = () => {
      setFullScreenMode(!fullScreenMode)
   }

   return (
      <BaseStoryField
         className={[styles.content, fullScreenMode && styles.fullScreenMode].join(" ")}
         title="Tree"
         scenePanel={<ScenePanel />}
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
      </BaseStoryField>
   )
}
