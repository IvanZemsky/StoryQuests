import { NarrowedRegisterOptions } from "@/shared/model"

export const titleOptinos: NarrowedRegisterOptions<"title"> = {
   required: true,
   minLength: 5,
   maxLength: 100,
}

export const descOptinos: NarrowedRegisterOptions<"desc"> = {
   maxLength: 300,
}
