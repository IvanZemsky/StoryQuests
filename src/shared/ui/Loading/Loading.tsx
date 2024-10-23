import styles from './styles.module.scss'
import TubeSpinner from '../../assets/animated/tube-spinner.svg?url'
import Image from "next/image";

export const Loading = () => {
   return ( 
      <div className={styles.loading}>
         <Image src={TubeSpinner} alt="Loading..." />
      </div>
   );
}