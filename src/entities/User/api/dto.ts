export type SignUpDto = {
   login: string
   password: string
}

export type SignInDto = {
   login: string
   password: string
}

export type GetSessionInfoDto = {
   id: string
   login: string
   iat: number
   exp: number
}
