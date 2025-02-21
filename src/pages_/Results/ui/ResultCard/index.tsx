import Image from "next/image"
import styles from "./styles.module.scss"
import { Scene } from "@/entities/Scene"

type Props = {
   scene: Scene
}

export const ResultCard = ({ scene }: Props) => {
   const { passes, title, description, img } = scene
   
   return (
      <div className={styles.resultCard}>
         <p className={styles.totalResults}>{passes}</p>
         <div className={styles.imgWrap}>
            <Image src={img} alt="Result image" fill sizes="auto" />
         </div>
         <div>
            <p className={styles.resultCardTitle}>{title}</p>
            <p className={styles.resultCardDesc}>{description}</p>
         </div>
      </div>
   )
}
