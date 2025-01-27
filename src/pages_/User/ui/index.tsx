import { UserPagelayout, ProfileHeader, ProfileCard, userService } from "@/entities/User"
import { Wrapper } from "@/shared/ui"
import { ProfileStoriesList } from "@/widgets/StoriesList"
import { fetchUserById } from "../lib/fetchUserById"
import { Page } from "../model/types"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const User = async ({ params }: Page) => {
   const accessToken = (await cookies()).get("access-token")
   const session = await userService.getSessionInfo({
      cookie: `${accessToken?.name}=${accessToken?.value}`,
   })

   if (session?.id === params.id) {
      redirect("/profile")
   }

   const profileData = await fetchUserById(params.id)

   if (!profileData) {
      return (
         <Wrapper>
            <p>Error while fetching profile</p>
         </Wrapper>
      )
   }

   return (
      <UserPagelayout
         header={<ProfileHeader title={profileData.login} />}
         userCard={<ProfileCard profileData={profileData} />}
         storiesList={
            <ProfileStoriesList
               userId={profileData.id}
               hasLabel={false}
               notFoundMessage={"User hasn't created any stories yet"}
            />
         }
      />
   )
}
