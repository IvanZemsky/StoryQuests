import styles from './StoryList.module.scss'
import { StoryCard } from '@/src/entities/Story/';

export const StoryList = () => {
  return (
    <div className={styles.list}>
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </div>
  )
}


