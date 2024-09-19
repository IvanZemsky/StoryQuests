import { PageRoutes } from "@/src/shared/constants";
import { ButtonLink } from "@/src/shared/ui";


const {  Login } = PageRoutes

export const LogInLink = () => {
   return ( 
      <ButtonLink href={Login}>Log in</ButtonLink>
   );
}