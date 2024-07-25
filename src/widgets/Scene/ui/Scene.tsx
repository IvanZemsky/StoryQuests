import styles from "./Scene.module.scss"
import Image from "next/image"
import cardbg from "@/public/cardbg.jpg"
import { SelectAnswer } from "@/src/features/scene/toNextScene"

type Props = {}

export const Scene = ({}: Props) => {
   return (
      <div className={styles.controls}>
         <Image src={cardbg} className={styles.illustration} alt="illutration" />
         <SelectAnswer />
      </div>
   )
}
