import { Button } from "@/src/shared"
import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath } from "@xyflow/react"
import styles from "./StoryEdge.module.scss"

export const StoryEdge = ({ id, sourceX, sourceY, targetX, targetY }: EdgeProps) => {
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
