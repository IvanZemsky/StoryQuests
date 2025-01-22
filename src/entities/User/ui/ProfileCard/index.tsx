import { GetSessionInfoDto } from "../../api/dto"
import styles from "./styles.module.scss"

type Props = {
   profileData: GetSessionInfoDto
}

export const ProfileCard = ({profileData}: Props) => {
   return (
      <div className={styles.profileCard}>
         <div className={styles.avatar}>{profileData.login[0]}</div>
         <p className={styles.login}>{profileData.login}</p>
      </div>
   )
}
