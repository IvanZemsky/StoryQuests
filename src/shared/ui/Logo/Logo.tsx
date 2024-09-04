import { ButtonLink } from "..";
import BookIcon from '@/src/shared/assets/icons/book.svg'
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