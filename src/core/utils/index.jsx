/**
 *
 * @param event {Event}
 * @returns {boolean}
 */
export const scrollTopOnClick = (event) => {
  if (event && event.target && event.target.target === "_blank") return false;
  if (event && (event.shiftKey || event.ctrlKey || event.metaKey)) return false;
  return true;
};
