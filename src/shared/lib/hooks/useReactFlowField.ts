"use client"

import {
   useNodesState,
   useEdgesState,
   Edge,
   Node,
   Connection,
   addEdge,
} from "@xyflow/react"
import { useState, useCallback } from "react"

type EdgeFactory<E extends Edge> = (params: Edge | Connection) => E

export function useReactFlowField<N extends Node, E extends Edge>(
   edgeFactory: EdgeFactory<E>,
   initialNodes: N[] = [],
   initialEdges: E[] = [],
) {
   const [fullScreenMode, setFullScreenMode] = useState(false)

   const [nodes, setNodes, onNodesChange] = useNodesState<N>(initialNodes)
   const [edges, setEdges, onEdgesChange] = useEdgesState<E>(initialEdges)

   const onConnect = useCallback(
      (params: Edge | Connection) =>
         setEdges((eds) => addEdge<E>(edgeFactory(params), eds)),
      [setEdges, edgeFactory],
   )

   const handleFullScreenClick = () => {
      setFullScreenMode(!fullScreenMode)
   }

   return {
      nodes,
      edges,
      setNodes,
      setEdges,
      onConnect,
      onEdgesChange,
      onNodesChange,
      fullScreenMode,
      handleFullScreenClick,
   }
}
