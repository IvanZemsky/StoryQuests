import { PageRoutes } from "@/shared/constants";
import { ButtonLink } from "@/shared/ui";

const { SignIn } = PageRoutes

export const LogInLink = () => {
   return ( 
      <ButtonLink href={SignIn}>Log in</ButtonLink>
   );
}