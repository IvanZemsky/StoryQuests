'use client'

import { Button } from "@/shared/ui"
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from "@xyflow/react"
import styles from "./styles.module.scss"
import { AnswerEdgeProps } from "@/entities/Answer";
import { MouseEventHandler, ReactNode } from "react";

type Props = AnswerEdgeProps & {
   modal?: ReactNode
   onClick?: MouseEventHandler<HTMLButtonElement>
}

export const BaseAnswerEdge = ({ id, data, modal, sourceX, sourceY, targetX, targetY, onClick }: Props) => {
   const text = data.text || 'Answer'

   const [edgePath, labelX, labelY] = getBezierPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
   })

   return (
      <>
         <BaseEdge id={id} path={edgePath} />
         <EdgeLabelRenderer>
            <Button
               variant="filled"
               color="secondary"
               defaultHover={false}
               onClick={onClick}
               style={{
                  position: "absolute",
                  transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                  pointerEvents: "all",
               }}
               className={[styles.button, styles.openAnswerBtn, "nodrag", "nopan"].join(
                  " ",
               )}
            >
               {text}
            </Button>
         </EdgeLabelRenderer>
         {modal}
      </>
   )
}
