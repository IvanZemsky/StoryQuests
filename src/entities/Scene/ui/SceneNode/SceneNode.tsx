'use client'

import { Handle, NodeProps, Node, Position } from "@xyflow/react"
import styles from "./SceneNode.module.scss"
import { SceneModal } from './../SceneModal/SceneModal';
import { observer } from "mobx-react";
import { modalStore } from "@/src/shared/model";

type SceneNodeType = Node<
   {
      text: string
   }
>

export const SceneNode = observer(({id, data}: NodeProps<SceneNodeType>) => {
   const {openModal} = modalStore

   const text = data.text || 'Title of scene'

   const modalContent = `sceneDataModal${id}`

   const handeModalOpen = () => {
      openModal(modalContent)
   }

   return (
      <div onClick={handeModalOpen}>
         <Handle type="target" position={Position.Top} className={styles.targetHandle} />
         <div className={styles.content}>
            <p className={styles.title}>{text}</p>
         </div>
         <Handle type="source" position={Position.Bottom} className={styles.sourceHandle} />
         <SceneModal id={id}/>
      </div>
   )
})
