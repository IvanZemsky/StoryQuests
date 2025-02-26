import styles from "./styles.module.scss"
import { DragEvent } from "react"

export const ScenePanel = () => {
   
   const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: string) => {
      if (event.dataTransfer) {
         event.dataTransfer.setData("application/reactflow", nodeType)
         event.dataTransfer.effectAllowed = "move"
      }
   }

   return (
      <div className={styles.panel}>
         <div
            className={styles.scene}
            draggable
            onDragStart={(event) => onDragStart(event, "scene")}
         >
            Scene
         </div>
         <div
            className={styles.scene}
            draggable
            onDragStart={(event) => onDragStart(event, "endScene")}
         >
            End Scene
         </div>
      </div>
   )
}
