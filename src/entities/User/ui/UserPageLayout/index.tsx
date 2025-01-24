import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"
import { ReactNode } from "react"

type Props = {
   header: ReactNode
   userCard: ReactNode
   storiesList: ReactNode
}

export const UserPagelayout = ({ header, userCard, storiesList }: Props) => {
   return (
      <Wrapper className={styles.wrapper}>
         <div className={styles.content}>
            {header}
            {userCard}
            {storiesList}
         </div>
      </Wrapper>
   )
}
