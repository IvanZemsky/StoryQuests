'use client'

import { Wrapper } from "@/src/shared/ui"
import { PageRoutes } from "@/src/shared/constants";
import { usePathname } from "next/navigation";
import styles from './Header.module.scss'
import { MainHeader } from "../ui/MainHeader/MainHeader";
import { StoryHeader } from "../ui/StoryHeader/StoryHeader";

const {Stories} = PageRoutes

export const Header = () => {
  const pathname = usePathname()
  const shouldShowStoryHeader = pathname.startsWith(Stories + '/')

  return (
    <header className={styles.header}>
      <Wrapper>
        {shouldShowStoryHeader ? <StoryHeader/> : <MainHeader/>} 
      </Wrapper>
    </header>
  )
}
