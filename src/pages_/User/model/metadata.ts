import { Metadata } from "next"
import { userService } from "@/entities/User"
import { Page } from "./types"

export const generateMetadata = async ({ params }: Page): Promise<Metadata> => {
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
