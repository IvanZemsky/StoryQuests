import { Handle, NodeProps, Node, Position } from "@xyflow/react"
import styles from "./SceneNode.module.scss"

type SceneNodeType = Node<
   {
      text: string
   }
>

export const SceneNode = ({data}: NodeProps<SceneNodeType>) => {
   return (
      <div>
         <Handle type="target" position={Position.Top} className={styles.targetHandle} />
         <div className={styles.content}>
            <p className={styles.title}>{data.text}</p>
         </div>
         <Handle type="source" position={Position.Bottom} className={styles.sourceHandle} />
      </div>
   )
}
