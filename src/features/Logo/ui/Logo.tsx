import { PageLink, PlusIcon } from "@/src/shared";
import styles from "./Logo.module.scss";

export const Logo = () => {
   return (
      <PageLink
         href="/"
         icon={<PlusIcon />}
         defaultHover={false}
         hasLeftIcon
         hasRightIcon
         className={styles.logo}
      >
         StoryQuests
      </PageLink>
   );
};
