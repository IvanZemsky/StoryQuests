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
            imgLink={"https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
         />
      </div>
   )
}
