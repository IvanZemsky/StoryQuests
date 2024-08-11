import { Edge, EdgeProps } from '@xyflow/react';

export interface IAnswer {
   _id: string
   title: string
   nextSceneId: string
}

export interface IAnswerEdgeData extends Record<string, unknown> {
   text: string
}

export interface IAnswerEdge extends Edge<IAnswerEdgeData> {
   data: IAnswerEdgeData
}

export interface AnswerEdgeProps extends EdgeProps<IAnswerEdge> {}