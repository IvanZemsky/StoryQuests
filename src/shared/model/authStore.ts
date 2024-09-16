import { makeAutoObservable } from "mobx"

class AuthStore {
   token: string = ""

   constructor() {
      makeAutoObservable(this)
      if (typeof window !== "undefined") {
         this.token = localStorage.getItem("token") || ""
      }
   }

   setToken = (token: string) => {
      if (!token) {
         throw new Error("Token must be provided")
      }
      this.token = token
      if (typeof window !== "undefined") {
         localStorage.setItem("token", token)
      }
   }

   logout = () => {
      this.token = ""
      if (typeof window !== "undefined") {
         localStorage.removeItem("token")
      }
   }

   get isAuthenticated() {
      return !!this.token
   }
}

export const authStore = new AuthStore()