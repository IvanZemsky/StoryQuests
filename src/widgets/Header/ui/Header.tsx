import { Wrapper } from "@/src/shared"
import styles from './Header.module.scss'
import { Logo } from '@/src/features/Logo';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
         <div className={styles.content}>
          <Logo />
         </div>
      </Wrapper>
    </header>
  )
}
