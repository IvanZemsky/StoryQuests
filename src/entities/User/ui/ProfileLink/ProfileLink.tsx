import Link from "next/link"
import ProfileIcon from "@/src/shared/assets/icons/profile.svg"
import styles from './ProfileLink.module.scss'
import { PageRoutes } from "@/src/shared/constants"

export const ProfileLink = () => {
   return (
      <Link href={PageRoutes.Profile} className={styles.link}>
         <ProfileIcon />
      </Link>
   )
}
