import { UserId } from "../model/types"

export type SignUpDto = {
   login: string
   password: string
}

export type SignInDto = {
   login: string
   password: string
}

export type GetSessionInfoDto = {
   id: UserId
   login: string
   iat: number
   exp: number
}
