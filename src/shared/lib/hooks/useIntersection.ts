"use client"

import { useRef, useCallback } from "react"

export function useIntersection(onIntersect: () => void) {
   const unsubscribe = useRef(() => {})

   return useCallback((el: HTMLDivElement | null) => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((intersection) => {
            if (intersection.isIntersecting) {
               onIntersect()
            }
         })
      })

      if (el) {
         observer.observe(el)
         unsubscribe.current = () => observer.unobserve(el)
      } else {
         unsubscribe.current()
      }
   }, [])
}