import { Button } from "@/shared/ui"
import styles from "./styles.module.scss"

export const SubmitButton = () => {
   return (
      <Button type="submit" variant="gradient" className={styles.publishBtn} uppercase>
         Publish
      </Button>
   )
}
