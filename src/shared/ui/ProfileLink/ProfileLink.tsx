import Link from "next/link"
import { PageRoutes } from "../../constants"
import ProfileIcon from "../../assets/icons/profile.svg"
import styles from './ProfileLink.module.scss'

export const ProfileLink = () => {
   return (
      <Link href={PageRoutes.Profile} className={styles.link}>
         <ProfileIcon />
      </Link>
   )
}
