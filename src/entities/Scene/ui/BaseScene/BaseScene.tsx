import { ButtonLink, SwitchFade } from "@/shared/ui"
import { IScene } from "../../model/types"
import styles from "./BaseScene.module.scss"
import { PageRoutes } from "@/shared/constants"
import ArrowRightIcon from "@/shared/assets/icons/arrow-right.svg"
import { ReactNode } from "react"

interface Props extends Omit<IScene, "answers"> {
   selectAnswer: ReactNode
   currentSceneId: string | null
}

export const BaseScene = ({
   id,
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
               <img src={img} className={styles.illustration} alt="illustration" />

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
