"use client"

import styles from "./MainLink.module.scss"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren<LinkProps> {
   href: string
}

export const MainLink = ({ href, children }: Props) => {
   const pathname = usePathname()

   const isActive = pathname.startsWith(href)
   console.log(isActive)

   const activeStyle = isActive ? styles.active : ''

   return (
      <Link href={href} className={[styles.link, activeStyle].join(" ")}>
         {children}
      </Link>
   )
}
