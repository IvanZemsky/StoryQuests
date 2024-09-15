"use client"

import { makeAutoObservable } from "mobx"

class AuthStore {
   token: string | null = null

   constructor() {
      makeAutoObservable(this)
      if (typeof window !== "undefined") {
         this.token = localStorage.getItem("token")
      }
   }

   setToken(token: string) {
      this.token = token
      if (typeof window !== "undefined") {
         localStorage.setItem("token", token)
      }
   }

   logout() {
      this.token = null
      if (typeof window !== "undefined") {
         localStorage.removeItem("token")
      }
   }

   get isAuthenticated() {
      return !!this.token
   }
}

export const authStore = new AuthStore()
