export const scrollToTop = (
   behavior: ScrollBehavior = "smooth",
   top: number = 0,
): void => {
   window.scrollTo({
      top,
      behavior,
   })
}
