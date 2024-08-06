"use client"

import { useEffect, useState, PropsWithChildren } from "react"
import { createPortal } from "react-dom"

interface Props extends PropsWithChildren {
   selector: string
}

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
