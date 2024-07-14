import { PageLink, PlusIcon } from "@/src/shared";
import styles from "./Logo.module.scss";

export const Logo = () => {
   return (
      <PageLink
         href="/"
         leftIcon={<PlusIcon />}
         rightIcon={<PlusIcon />}
         defaultHover={false}
         className={styles.logo}
      >
         StoryQuests
      </PageLink>
   );
};
