import { Check, CheckProps } from "../Check"
import { useSelectContext } from "./context"

export const SelectOption = (props: Omit<CheckProps, "name">) => {
   const { onChange, name, value } = useSelectContext()

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
