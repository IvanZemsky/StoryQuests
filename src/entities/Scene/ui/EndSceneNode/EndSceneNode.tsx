"use client"

import { Handle, Position } from "@xyflow/react"
import styles from "./EndSceneNode.module.scss"
import { setModal } from "@/src/shared/lib/helpers/setModal"
import { SceneModal } from "../SceneModal/SceneModal"
import { SceneNodeProps, } from "../../model/types"
import { Modals } from "@/src/shared/model"

export const EndSceneNode = ({ id, data }: SceneNodeProps) => {
   const title = data.title || "Title of ending"

   const handleModalOpen = setModal(Modals.StoryScene, id)

   return (
      <div onClick={handleModalOpen}>
         <Handle type="target" position={Position.Top} className={styles.handle} />
         <div className={styles.topBorder}></div>
         <div className={styles.content}>
            {data.img && (
               <div className={styles.imgWrap}>
                  <img src={data.img} alt="illustration" />
               </div>
            )}
            <p className={styles.title}>{title}</p>
         </div>

         <SceneModal id={id} data={data} />
      </div>
   )
}
