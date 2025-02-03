import styles from './styles.module.scss'
import { Wrapper } from "@/shared/ui";
import { Intro } from "./Intro";
import { PopularStories } from "./PopularStories";
import { Field } from "./Field";
import { Metadata } from "next";
import { verifyServerSession } from "@/features/user";

export const metadata: Metadata = {
   title: 'StoryQuests'
}

export const Home = async () => {
   const session = await verifyServerSession()

   return ( 
      <Wrapper>
         <div className={styles.content}>
            <Intro isAuth={!!session}/>
            <PopularStories/>
            <Field/>
         </div>
      </Wrapper>
   );
}