import { Metadata } from "next"
import { userService } from "@/entities/User"
import { Page } from "./types"

export const generateMetadata = async (props: Page): Promise<Metadata> => {
   const params = await props.params
   try {
      const user = await userService.getUserById(params.id)
      return {
         title: user.login,
      }
   } catch (error) {
      return {
         title: "User not found",
      }
   }
}
