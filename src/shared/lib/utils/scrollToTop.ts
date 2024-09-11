/**
 * Scrolls the page to the top
 * @param {ScrollBehavior} behavior - 'auto', 'smooth', or 'instant'. Default is 'smooth'.
 * @returns {void}
 */

export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
   window.scrollTo({
      top: 0,
      behavior,
   });
}