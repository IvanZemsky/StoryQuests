import styles from './styles.module.scss'
import TubeSpinner from '../../assets/animated/tube-spinner.svg'

export const Loading = () => {
   return ( 
      <div className={styles.loading}>
         <TubeSpinner/>
      </div>
   );
}