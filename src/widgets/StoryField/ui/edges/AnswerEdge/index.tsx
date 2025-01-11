'use client'

import { Button } from "@/shared/ui"
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from "@xyflow/react"
import styles from "./styles.module.scss"
import { setModal } from "@/shared/lib";
import { AnswerEdgeProps } from "@/entities/Answer";
import { EditAnswerModal } from "@/features/answer";

export const AnswerEdge = ({ id, data, sourceX, sourceY, targetX, targetY }: AnswerEdgeProps) => {
   const text = data.text || 'Answer'

   const handleModalOpen = setModal('sceneAnswer', id)

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
               onClick={handleModalOpen}
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
         <EditAnswerModal id={id}/>
      </>
   )
}
