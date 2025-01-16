import { PropsWithChildren } from "react"
import { Providers } from "../providers"
import "@/shared/ui/styles/vars.scss"
import "@/shared/ui/styles/mixins.scss"
import "@/app/styles/reset.scss"
import "@/app/styles/fonts.scss"

export const RootLayout = ({ children }: PropsWithChildren) => {
   return (
      <html lang="en">
         <body>
            <Providers>
               <div className="root">
                  {children}
               </div>
               <div id="modal"></div>
            </Providers>
         </body>
      </html>
   )
}
