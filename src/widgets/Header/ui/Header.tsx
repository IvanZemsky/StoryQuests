import { MainLink, Wrapper } from "@/src/shared"
import styles from './Header.module.scss'
import { Logo } from '@/src/shared';
import { PageRoutes } from "@/src/shared";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
         <div className={styles.content}>
          <Logo />
          <nav className={styles.nav}>
            <ul>
              <MainLink href={PageRoutes.Stories}>Stories</MainLink>
              <MainLink href={PageRoutes.Create}>Create</MainLink>
            </ul>
          </nav>
         </div>
      </Wrapper>
    </header>
  )
}
