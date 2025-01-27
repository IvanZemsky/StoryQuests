import { Check, CheckProps } from "../Check"
import { useSwitcherGroupContext } from "./context"

export function SwitcherGroupCheck(props: Omit<CheckProps, "name">) {
   const { value, onChange, name } = useSwitcherGroupContext()

   return (
      <Check
         {...props}
         name={name}
         onChange={onChange}
         checked={value === props.value}
         text={props.text}
         value={props.value}
      />
   )
}
