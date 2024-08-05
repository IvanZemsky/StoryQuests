import { MainLink, Wrapper, Logo } from "@/src/shared/ui"
import styles from './Header.module.scss'
import { PageRoutes } from "@/src/shared/constants";

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
