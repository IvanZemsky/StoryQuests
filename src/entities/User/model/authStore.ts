import { makeAutoObservable } from "mobx"

class AuthStore {
   token: string = ""
   isAuth = false

   constructor() {
      makeAutoObservable(this)
      if (typeof window !== "undefined") {
         this.token = localStorage.getItem("token") || ""
      }
      this.isAuth = !!this.token
   }

   setToken = (token: string) => {
      if (!token) {
         throw new Error("Token must be provided")
      }
      this.token = token
      this.isAuth = true
      if (typeof window !== "undefined") {
         localStorage.setItem("token", token)
      }
   }

   logout = () => {
      this.token = ""
      this.isAuth = false
      if (typeof window !== "undefined") {
         localStorage.removeItem("token")
      }
   }
}

export const authStore = new AuthStore()