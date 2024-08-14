import styles from "./StoryList.module.scss"
import { StoryCard } from "@/src/entities/Story/"

export const StoryList = () => {
   return (
      <div className={styles.list}>
         <StoryCard
            id={"12123"}
            name={"Story name"}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat`}
            login={"AuthorNickname"}
            imgLink={""}
         />
      </div>
   )
}
