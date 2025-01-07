"use client"

import { useEffect, useState, PropsWithChildren } from "react"
import { createPortal } from "react-dom"

type Props = {
   selector: string
} & PropsWithChildren

export const ClientPortal = ({ children, selector }: Props) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted
      ? createPortal(children, document.querySelector(selector) as HTMLElement)
      : null
}
