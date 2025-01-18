"use client"

import { useActiveLink } from "../../lib"
import styles from "./styles.module.scss"
import Link, { LinkProps } from "next/link"
import { PropsWithChildren } from "react"

type Props = {
   href: string
} & PropsWithChildren<LinkProps>

export const MainLink = ({ href, children }: Props) => {
   const activeStyle = useActiveLink(href, styles.active)

   return (
      <Link href={href} className={[styles.link, activeStyle].join(" ")}>
         {children}
      </Link>
   )
}
