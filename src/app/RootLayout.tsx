import { PropsWithChildren } from "react"
import { ReactQueryProvider } from "./providers/ReactQueryProvider"
import { Layout } from "./layouts/Layout"
import "@/shared/ui/styles/vars.scss"
import "@/shared/ui/styles/mixins.scss"
import "@/app/styles/reset.scss"
import "@/app/styles/fonts.scss"

export const RootLayout = ({ children }: PropsWithChildren) => {
   return (
      <html lang="en">
         <body>
            <ReactQueryProvider>
               <div className="root">
                  <Layout>{children}</Layout>
               </div>
               <div id="modal"></div>
            </ReactQueryProvider>
         </body>
      </html>
   )
}
