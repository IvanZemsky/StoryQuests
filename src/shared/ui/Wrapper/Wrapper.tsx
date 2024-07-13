import { PropsWithChildren } from "react"
import styles from './Wrapper.module.scss'

export const Wrapper = ({children}: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}
