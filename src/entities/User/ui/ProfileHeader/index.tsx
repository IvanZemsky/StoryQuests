import { ReactNode } from "react"
import styles from "./styles.module.scss"

type Props = {
   title: string
   signOutBtn?: ReactNode
}

export const ProfileHeader = ({ title, signOutBtn }: Props) => {
   return (
      <header className={styles.header}>
         <h1 className={styles.title}>{title}</h1> {signOutBtn}
      </header>
   )
}
