import Link from "next/link"
import ProfileIcon from "@/shared/assets/icons/profile.svg"
import styles from "./styles.module.scss"
import { PageRoutes } from "@/shared/constants"
import { Tooltip } from "@/shared/ui"

export const ProfileLink = () => {
   return (
      <Tooltip text="Your profile">
         <Link href={PageRoutes.Profile} className={styles.link}>
            <ProfileIcon />
         </Link>
      </Tooltip>
   )
}
