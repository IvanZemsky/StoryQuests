import { PageRoutes } from "@/src/shared/constants";
import Link from "next/link";
import styles from './StoryHeader.module.scss'

const { Stories, Home } = PageRoutes

export const StoryHeader = () => {
   return ( 
      <div className={styles.content}>
         <h1><Link className={styles.link} href={Home}>StoryQuests</Link> <span>-</span> Story name</h1>
         <nav className={styles.nav}>
            <ul>
               <Link href={Stories}>Exit</Link>
            </ul>
         </nav>
      </div>
   );
}