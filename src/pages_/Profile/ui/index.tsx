import { SignOutBtn } from "@/features/user"
import { Wrapper } from "@/shared/ui"
import { cookies } from "next/headers"
import { ProfileCard, ProfileHeader, UserPagelayout, userService } from "@/entities/User"
import { ProfileStoriesList } from "@/widgets/StoriesList"

export const Profile = async () => {
   const accessToken = (await cookies()).get("access-token")
   const profileData = await userService.getSessionInfo({
      cookie: `${accessToken?.name}=${accessToken?.value}`,
   })

   if (!profileData) {
      return (
         <Wrapper>
            <p>Error while fetching profile</p>
         </Wrapper>
      )
   }

   return (
      <UserPagelayout
         header={<ProfileHeader title="Your profile" signOutBtn={<SignOutBtn />} />}
         userCard={<ProfileCard profileData={profileData} />}
         storiesList={
            <ProfileStoriesList
               userId={profileData.id}
               hasLabel
               notFoundMessage="You haven't created any stories yet"
            />
         }
      />
   )
}
