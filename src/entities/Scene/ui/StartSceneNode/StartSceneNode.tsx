import { Handle, NodeProps, Node, Position } from "@xyflow/react"
import styles from "./StartSceneNode.module.scss"

type StartSceneNodeType = Node<
   {
      text: string
   }
>

export const StartSceneNode = ({data}: NodeProps<StartSceneNodeType>) => {
   return (
      <div>
         <div className={styles.content}>
            <p className={styles.title}>{data.text}</p>
         </div>
         <Handle type="source" position={Position.Bottom} className={styles.handle} />
      </div>
   )
}
