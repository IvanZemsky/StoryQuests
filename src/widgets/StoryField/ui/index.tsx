"use client"

import { Controls, Background } from "@xyflow/react"
import styles from "./styles.module.scss"
import "@xyflow/react/dist/style.css"

import { nodeTypes } from "../model/customNodes"
import { edgeTypes } from "../model/customEdges"
import { createCustomEdge } from "../lib/helpers/createCustomEdge"
import { useDragAndDrop } from "../lib/hooks/useDragAndDrop"

import { ScenePanel, SceneNode } from "@/entities/Scene"
import { BaseStoryField, STORY_FIRST_SCENE } from "@/entities/Story"
import { IAnswerEdge } from "@/entities/Answer"

import { storyCreationStore } from "@/features/story"
import { useReactFlowField } from "@/shared/lib"
import { FullScreenBtn } from "@/shared/ui"
import { useEffect } from "react"

const initialNodes: SceneNode[] = [
   {
      id: STORY_FIRST_SCENE,
      type: "startScene",
      position: { x: 0, y: 0 },
      data: { title: "", description: "", img: "", type: "default" },
   },
]

const { saveNodes, saveEdges } = storyCreationStore

export const StoryField = () => {
   const {
      nodes,
      onEdgesChange,
      onNodesChange,
      edges,
      setNodes,
      onConnect,
      fullScreenMode,
      handleFullScreenClick,
   } = useReactFlowField<SceneNode, any>(createCustomEdge, initialNodes) // TODO: working types for AnswerEdge

   const [onDragOver, onDrop] = useDragAndDrop(setNodes)

   useEffect(() => {
      saveNodes(nodes)
   }, [nodes])

   useEffect(() => {
      saveEdges(edges)
   }, [edges])

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
