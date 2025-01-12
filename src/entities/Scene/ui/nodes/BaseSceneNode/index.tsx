"use client"

import { Handle, Position } from "@xyflow/react"
import styles from "./styles.module.scss"
import { SceneNodeProps } from "@/entities/Scene"
import { ReactNode } from "react"

type Props = SceneNodeProps & {
   modal?: ReactNode
}

export const BaseSceneNode = ({ data, modal }: Props) => {
   const title = data.title || "Title of scene"

   return (
      <>
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

         {modal}
      </>
   )
}
