import { PageLink, PageRoutes, BookIcon } from "@/src/shared";
import styles from "./Logo.module.scss";

export const Logo = () => {
   return (
      <PageLink
         href={PageRoutes.Home}
         leftIcon={<BookIcon />}
         rightIcon={<BookIcon />}
         defaultHover={false}
         className={styles.logo}
      >
         StoryQuests
      </PageLink>
   )
}