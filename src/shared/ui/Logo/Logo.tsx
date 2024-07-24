import { PageLink, PageRoutes, PlusIcon } from "@/src/shared";
import styles from "./Logo.module.scss";

export const Logo = () => {
   return (
      <PageLink
         href={PageRoutes.Home}
         leftIcon={<PlusIcon />}
         rightIcon={<PlusIcon />}
         defaultHover={false}
         className={styles.logo}
      >
         StoryQuests
      </PageLink>
   )
}