export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
   window.scrollTo({
      top: 0,
      behavior,
   });
}