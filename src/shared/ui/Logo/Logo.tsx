
import BookIcon from '@/shared/assets/icons/book.svg'

import styles from "./Logo.module.scss";
import { PageRoutes } from "@/shared/constants";
import { ButtonLink } from "../ButtonLink/ButtonLink";

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