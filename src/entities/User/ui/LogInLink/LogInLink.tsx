import { PageRoutes } from "@/shared/constants";
import { ButtonLink } from "@/shared/ui";


const {  Login } = PageRoutes

export const LogInLink = () => {
   return ( 
      <ButtonLink href={Login}>Log in</ButtonLink>
   );
}