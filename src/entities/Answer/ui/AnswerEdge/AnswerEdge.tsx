import { Button } from "@/src/shared/ui"
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from "@xyflow/react"
import styles from "./AnswerEdge.module.scss"

export const AnswerEdge = ({ id, sourceX, sourceY, targetX, targetY }: EdgeProps) => {
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
               style={{
                  position: "absolute",
                  transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                  pointerEvents: "all",
               }}
               className={[styles.button, styles.openAnswerBtn, "nodrag", "nopan"].join(
                  " ",
               )}
            >
               Answer
            </Button>
         </EdgeLabelRenderer>
      </>
   )
}
