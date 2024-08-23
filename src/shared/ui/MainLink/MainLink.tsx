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
   const isActive = href === '/' ? pathname === href : pathname.startsWith(href)
   
   const activeStyle = isActive ? styles.active : ''

   return (
      <Link href={href} className={[styles.link, activeStyle].join(" ")}>
         {children}
      </Link>
   )
}
