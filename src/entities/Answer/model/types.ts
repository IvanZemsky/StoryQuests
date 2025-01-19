import { Edge, EdgeProps } from '@xyflow/react';

export type Answer = {
   id: string
   text: string
   nextSceneId: string
}

export type AnswerEdgeData = {} & Record<string, unknown> & {
   text: string
}

export type AnswerEdge = Edge<AnswerEdgeData> & {
   data: AnswerEdgeData
}

export type AnswerEdgeProps =  EdgeProps<AnswerEdge> & {}