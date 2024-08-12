import { Edge, EdgeProps } from '@xyflow/react';

export interface IAnswer {
   id: string
   text: string
   nextSceneId: string
}

export interface IAnswerEdgeData extends Record<string, unknown> {
   text: string
}

export interface IAnswerEdge extends Edge<IAnswerEdgeData> {
   data: IAnswerEdgeData
}

export interface AnswerEdgeProps extends EdgeProps<IAnswerEdge> {}