import { NarrowedRegisterOptions } from "@/shared/model"

export const answerOptions: NarrowedRegisterOptions<"text"> = {
   required: true,
   minLength: 1,
   maxLength: 35,
}
