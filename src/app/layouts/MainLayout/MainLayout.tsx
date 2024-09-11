"use client"

import { PropsWithChildren, Suspense } from "react"
import "@/src/shared/ui/styles/vars.scss"
import "@/src/shared/ui/styles/mixins.scss"
import "@/src/app/styles/reset.scss"
import "@/src/app/styles/fonts.scss"
import { Header } from "@/src/widgets/Header"
import Loading from "@/app/loading"
import { Footer } from "@/src/widgets/Footer"
import styles from './MainLayout.module.scss'

export const MainLayout = ({ children }: PropsWithChildren) => {
   return (
      <div className={styles.app}>
         <Header />
         <main>
            <Suspense fallback={<Loading />}>{children}</Suspense>
         </main>
         <Footer />
      </div>
   )
}
