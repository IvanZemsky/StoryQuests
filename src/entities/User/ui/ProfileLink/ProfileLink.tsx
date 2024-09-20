import Link from "next/link"
import ProfileIcon from "@/shared/assets/icons/profile.svg"
import styles from './ProfileLink.module.scss'
import { PageRoutes } from "@/shared/constants"

export const ProfileLink = () => {
   return (
      <Link href={PageRoutes.Profile} className={styles.link}>
         <ProfileIcon />
      </Link>
   )
}
