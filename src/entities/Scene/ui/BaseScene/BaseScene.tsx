import { ButtonLink, SwitchFade } from "@/shared/ui"
import { Scene } from "../../model/types"
import styles from "./styles.module.scss"
import { PageRoutes } from "@/shared/constants"
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg"
import { ReactNode } from "react"
import Image from "next/image"

type Props = {
   selectAnswer: ReactNode
   currentSceneId: string | null
} & Omit<Scene, "answers">

export const BaseScene = ({
   currentSceneId,
   title,
   description,
   img,
   type,
   selectAnswer,
}: Props) => {
   return (
      <SwitchFade switchKey={currentSceneId} timeout={300}>
         <div className={styles.content}>
            {type === "end" && <div className={styles.topLine}></div>}
            <h2 className={styles.title}>{title}</h2>
            {!!description && <p className={styles.desc}>{description}</p>}

            <div className={styles.controls}>
               <div className={styles.imgWrap}>
                  <Image src={img} fill sizes="auto" className={styles.illustration} alt="illustration" />
               </div>

               {type === "default" ? (
                  selectAnswer
               ) : (
                  <ButtonLink
                     variant="filled"
                     href={PageRoutes.Home}
                     className={styles.endBtn}
                     leftIcon={<ArrowRightIcon />}
                     defaultHover={false}
                  />
               )}
            </div>
            {type === "end" && <div className={styles.bottomLine}></div>}
         </div>
      </SwitchFade>
   )
}
