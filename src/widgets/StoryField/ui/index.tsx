"use client"

import { Controls, Background } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import styles from "./styles.module.scss"

import { nodeTypes } from "../model/customNodes"
import { edgeTypes } from "../model/customEdges"
import { initialNodes } from "../model/initialNodes"
import { createCustomEdge } from "../lib/helpers/createCustomEdge"
import { useDragAndDrop } from "../lib/hooks/useDragAndDrop"

import { ScenePanel, SceneNode } from "@/entities/Scene"
import { BaseStoryField } from "@/entities/Story"
import { AnswerEdge } from "@/entities/Answer"

import { useReactFlowField } from "@/shared/lib"
import { FullScreenBtn } from "@/shared/ui"
import { useEffect } from "react"
import cn from "classnames"

type Props = {
   nodesChangeEffect?: (nodes: SceneNode[]) => any
   edgesChangeEffect?: (edges: AnswerEdge[]) => any
}

export const StoryField = ({ nodesChangeEffect, edgesChangeEffect }: Props) => {
   const {
      nodes,
      onEdgesChange,
      onNodesChange,
      edges,
      setNodes,
      onConnect,
      fullScreenMode,
      handleFullScreenClick,
   } = useReactFlowField<SceneNode, any>(createCustomEdge, initialNodes) // TODO: solve types for AnswerEdge

   const [onDragOver, onDrop] = useDragAndDrop(setNodes)

   useEffect(() => {
      nodesChangeEffect?.(nodes)
   }, [nodes, nodesChangeEffect])

   useEffect(() => {
      edgesChangeEffect?.(edges)
   }, [edges, edgesChangeEffect])

   return (
      <BaseStoryField
         className={cn(styles.content, fullScreenMode && styles.fullScreenMode)}
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
