'use client'

import { Handle, Position } from "@xyflow/react"
import styles from "./StartSceneNode.module.scss"
import { setModal } from "@/src/shared/lib"
import { useState } from "react"
import { SceneProps } from "../../model/types"
import { SceneModal } from "../SceneModal/SceneModal"

export const StartSceneNode = ({id, data}: SceneProps) => {
   const [title, setTitle] = useState(data.title || 'Title of scene')

   const handleModalOpen = setModal('storyScene', id)

   return (
      <div onClick={handleModalOpen}>
         <div className={styles.content}>
            <p className={styles.title}>{title}</p>
         </div>
         <Handle type="source" position={Position.Bottom} className={styles.handle} />

         <SceneModal id={id} data={data} setTitle={setTitle} hasDeleteBtn={false}/>
      </div>
   )
}
