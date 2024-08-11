'use client'

import { Handle, Position } from "@xyflow/react";
import styles from './EndSceneNode.module.scss'
import { setModal } from '@/src/shared/lib/helpers/setModal';
import { SceneModal } from "../SceneModal/SceneModal";
import { SceneNodeProps } from "../../model/types";

export const EndSceneNode = ({id, data}: SceneNodeProps) => {
   const title = data.title || 'Title of ending'

   const handleModalOpen = setModal('storyScene', id);

   return ( 
      <div onClick={handleModalOpen}>
         <Handle type="target" position={Position.Top} className={styles.handle} />
         <div className={styles.topBorder}></div>
         <div className={styles.content}>
            <p className={styles.title}>{title}</p>
         </div>

         <SceneModal id={id} data={data} />
      </div>
   );
}