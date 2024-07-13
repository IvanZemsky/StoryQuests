import { Button, Wrapper } from "@/src/shared"
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
         <div className={styles.content}>
          <Button>StoryQuests</Button>
         </div>
      </Wrapper>
    </header>
  )
}
