import { StoryId } from "@/entities/Story"
import styles from "./styles.module.scss"
import { fetchAllResults } from "../../lib/fetchAllResults"
import { ResultCard } from "../ResultCard"
import { ResultPassesCard } from "../ResultPassesCard"

type Props = {
   storyId: StoryId
}

export const Statistics = async ({ storyId }: Props) => {
   const scenes = await fetchAllResults(storyId)

   if (!scenes) {
      return <p>Error</p>
   }

   const total = scenes.reduce((total, item) => total + item.passes!, 0)

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
               {total > 0 && scenes.map((scene, i) => (
                  <ResultPassesCard key={scene.id} number={i} total={total} passes={scene.passes!} />
               ))}
            </div>
         </div>
      </section>
   )
}
