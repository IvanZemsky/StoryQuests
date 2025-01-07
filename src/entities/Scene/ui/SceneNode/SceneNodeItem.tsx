"use client"

import { Handle, Position } from "@xyflow/react"
import styles from "./styles.module.scss"
import { SceneModal } from "../SceneModal/SceneModal"
import { setModal } from "@/shared/lib"
import { SceneNodeProps, } from "../../model/types"
import { Modals } from "@/shared/model"

export const SceneNodeItem = ({ id, data }: SceneNodeProps) => {
   const title = data.title || "Title of scene"

   const handleModalOpen = setModal(Modals.StoryScene, id)

   return (
      <div onClick={handleModalOpen}>
         <Handle type="target" position={Position.Top} className={styles.targetHandle} />

         <div className={styles.content}>
            {data.img && (
               <div className={styles.imgWrap}>
                  <img src={data.img} alt="illustration" />
               </div>
            )}
            <p className={styles.title}>{title}</p>
         </div>
         <Handle
            type="source"
            position={Position.Bottom}
            className={styles.sourceHandle}
         />

         <SceneModal id={id} data={data} />
      </div>
   )
}
