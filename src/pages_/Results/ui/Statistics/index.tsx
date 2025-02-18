import { StoryId } from "@/entities/Story"
import styles from "./styles.module.scss"
import { fetchAllResults } from "../../lib/fetchAllResults"
import { ResultCard } from "../ResultCard"

type Props = {
   storyId: StoryId
}

export const Statistics = async ({ storyId }: Props) => {
   const scenes = await fetchAllResults(storyId)

   if (!scenes) {
      return <p>Error</p>
   }

   return (
      <section className={styles.stats}>
         <h2>Statistics</h2>
         <div className={styles.statsWrap}>
            <div className={styles.allResults}>
               {scenes.map((scene) => (
                  <ResultCard key={scene.id} scene={scene} />
               ))}
            </div>
            <div className={styles.resultColumn}>
               <div className={styles.resultColumnBlock}>10%</div>
            </div>
         </div>
      </section>
   )
}
