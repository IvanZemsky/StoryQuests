import { ChangeEventHandler, createContext, useContext } from "react"

export const SwitcherGroupContext = createContext<{
   value?: string | number | readonly string[]
   name?: string
   onChange?: ChangeEventHandler<HTMLInputElement>
}>({})

export function useSwitcherGroupContext() {
   const context = useContext(SwitcherGroupContext)

   if (!context) {
      throw new Error(
         "All sub components of SwitcherGroup must be wrapped in SwitcherGroup",
      )
   }

   return context
}
