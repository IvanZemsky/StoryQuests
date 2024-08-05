import { ButtonLink, BookIcon } from "..";
import { PageRoutes } from "../../constants";
import styles from "./Logo.module.scss";

export const Logo = () => {
   return (
      <ButtonLink
         href={PageRoutes.Home}
         leftIcon={<BookIcon />}
         rightIcon={<BookIcon />}
         defaultHover={false}
         className={styles.logo}
      >
         StoryQuests
      </ButtonLink>
   )
}