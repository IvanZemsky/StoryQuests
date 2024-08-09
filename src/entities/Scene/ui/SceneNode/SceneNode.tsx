'use client'

import { Handle, NodeProps, Node, Position } from "@xyflow/react"
import styles from "./SceneNode.module.scss"
import { SceneModal } from './../SceneModal/SceneModal';
import { observer } from "mobx-react";
import { modalStore } from "@/src/shared/model";
import { storyCreationStore } from "../../model/storyCreatingStore";
import { useMemo, useState } from "react";

type SceneNodeType = Node<
   {
      title: string
      description: string
   }
>

export const SceneNode = observer(({id, data}: NodeProps<SceneNodeType>) => {
   const {openModal} = modalStore
   const [title, setTitle] = useState(data.title || 'Title of scene')

   const modalContent = `sceneDataModal${id}`

   const handeModalOpen = () => {
      openModal(modalContent)
   }

   return (
      <div onClick={handeModalOpen}>
         <Handle type="target" position={Position.Top} className={styles.targetHandle} />
         <div className={styles.content}>
            <p className={styles.title}>{title}</p>
         </div>
         <Handle type="source" position={Position.Bottom} className={styles.sourceHandle} />
         <SceneModal id={id} data={data} setTitle={setTitle}/>
      </div>
   )
})
