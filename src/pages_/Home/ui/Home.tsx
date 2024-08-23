import { Wrapper } from "@/src/shared/ui";
import styles from './Home.module.scss'
import { Intro } from "./Intro/Intro";
import { PopularStories } from "./PopularStories/PopularStories";
import { Field } from "./Field/Field";

type Props = {
 
}
export const Home = ({}: Props) => {
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