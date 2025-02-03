"use client"

import { ButtonLink, Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss"

export const Error = () => {
   return (
      <Wrapper className={styles.wrap}>
         <h1 className={styles.errorTitle}>Something went wrong</h1>
         <ButtonLink href="/">Home</ButtonLink>
      </Wrapper>
   )
}