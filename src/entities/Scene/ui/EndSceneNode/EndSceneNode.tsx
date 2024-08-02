import { Handle, NodeProps, Node, Position } from "@xyflow/react";
import styles from './EndSceneNode.module.scss'

type EndSceneNodeType = Node<
   {
      text: string
   }
>

export const EndSceneNode = ({data}: NodeProps<EndSceneNodeType>) => {
   console.log(data)

   return ( 
      <div>
         <Handle type="target" position={Position.Top} className={styles.handle} />
         <div className={styles.topBorder}></div>
         <div className={styles.content}>
            <p className={styles.title}>{data.text}</p>
         </div>
      </div>
   );
}