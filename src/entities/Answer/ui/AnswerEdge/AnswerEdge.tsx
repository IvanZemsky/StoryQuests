'use client'

import { Button } from "@/src/shared/ui"
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from "@xyflow/react"
import styles from "./AnswerEdge.module.scss"
import { AnswerEdgeProps } from "../../model/types"
import { AnswerModal } from './../AnswerModal/AnswerModal';
import { setModal } from "@/src/shared/lib";



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
         <AnswerModal id={id} data={data}/>
      </>
   )
}
