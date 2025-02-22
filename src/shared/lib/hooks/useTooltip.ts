import { useState, useEffect, MouseEvent } from "react"

export function useTooltip() {
   const [isVisible, setIsVisible] = useState(false)
   const [position, setPosition] = useState({ x: 0, y: 0 })

   const handleMouseEnter = () => {
      setIsVisible(true)
   }

   const handleMouseLeave = () => {
      setIsVisible(false)
   }

   const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      const x = event.clientX
      const y = event.clientY

      setPosition({ x, y })
   }

   useEffect(() => {
      const updatePosition = () => {
         if (isVisible) {
            setPosition({
               x: position.x,
               y: position.y,
            })
         }
      }

      window.addEventListener("scroll", updatePosition)
      window.addEventListener("resize", updatePosition)

      return () => {
         window.removeEventListener("scroll", updatePosition)
         window.removeEventListener("resize", updatePosition)
      }
   }, [isVisible, position])

   return {
      isVisible,
      position,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseMove,
   }
}
