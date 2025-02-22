import { NAV_LINKS } from "@/shared/constants"

type ComponentType<P = any> = React.ComponentType<P> | React.JSXElementConstructor<P>

type Args = {
   component: ComponentType
   isAuth: boolean
}

export function mapNavLinks({ component, isAuth }: Args) {
   const Component = component

   return NAV_LINKS.map(({ href, text, isPrivate }) => {
      if (isPrivate && !isAuth) return null
      
      return (
         <Component key={href} href={href}>
            {text}
         </Component>
      )
   })
}
