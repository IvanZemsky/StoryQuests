import styles from './Home.module.scss'
import { Wrapper } from "@/src/shared/ui";
import { Intro } from "./Intro/Intro";
import { PopularStories } from "./PopularStories/PopularStories";
import { Field } from "./Field/Field";

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