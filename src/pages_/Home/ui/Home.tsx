import styles from './Home.module.scss'
import { Wrapper } from "@/shared/ui";
import { Intro } from "./Intro/Intro";
import { PopularStories } from "./PopularStories/PopularStories";
import { Field } from "./Field/Field";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: 'StoryQuests'
}

export const Home = () => {
   return ( 
      <Wrapper>
         <div className={styles.content}>
            <Intro/>
            <PopularStories/>
            <Field/>
         </div>
      </Wrapper>
   );
}