'use client'

import { Handle, Position } from "@xyflow/react"
import styles from "./SceneNode.module.scss"
import { SceneModal } from './../SceneModal/SceneModal';
import { useState } from "react";
import { setModal } from "@/src/shared/lib";
import { SceneProps } from "../../model/types";

export const SceneNode = ({id, data}: SceneProps) => {
   const [title, setTitle] = useState(data.title || 'Title of scene')

   const handleModalOpen = setModal('storyScene', id)

   return (
      <div onClick={handleModalOpen}>
         <Handle type="target" position={Position.Top} className={styles.targetHandle} />
         <div className={styles.content}>
            <p className={styles.title}>{title}</p>
         </div>
         <Handle type="source" position={Position.Bottom} className={styles.sourceHandle} />

         <SceneModal id={id} data={data} setTitle={setTitle}/>
      </div>
   )
}
