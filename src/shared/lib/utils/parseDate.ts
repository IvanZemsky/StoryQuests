export function parseDate(dateString: string) {
   const date = new Date(dateString)

   const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
   const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
   const year = date.getFullYear()

   const dateParts = [day, month, year]
   const timeParts = [date.getHours(), date.getMinutes()]

   return `${dateParts.join(".")}, ${timeParts.join(":")}`
}
