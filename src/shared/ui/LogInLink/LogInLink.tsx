import { PageRoutes } from "../../constants";
import { ButtonLink } from "../ButtonLink/ButtonLink";

const {  Login } = PageRoutes

export const LogInLink = () => {
   return ( 
      <ButtonLink href={Login}>Log in</ButtonLink>
   );
}