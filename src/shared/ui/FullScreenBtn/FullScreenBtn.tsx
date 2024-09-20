'use client'

import { ControlButton, ControlButtonProps } from "@xyflow/react"
import { useState, MouseEventHandler } from "react"
import FullScreenIcon from "@/shared/assets/icons/full-screen.svg"
import FullScreenExitIcon from "@/shared/assets/icons/full-screen-exit.svg"
import { MouseEvent } from 'react'

interface FullScreenBtnProps extends ControlButtonProps {
   onClick: MouseEventHandler<HTMLButtonElement>;
}

export const FullScreenBtn = ({onClick}: FullScreenBtnProps) => {
   const [isFullScreen, setIsFullScreen] = useState(false)

   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick(event)
      setIsFullScreen(!isFullScreen)
   }

   return (
      <ControlButton onClick={handleClick}>
         {isFullScreen ? <FullScreenExitIcon /> : <FullScreenIcon />}
      </ControlButton>
   )
}