/**
 * Starts a new collapsed inline group in the console. Subsequent messages will be indented and hidden until expanded.
 *
 * @param {...any[]} label - Optional label(s) for the collapsed group.
 *
 * @example
 * groupCollapsed("Debug Info");
 * log("Step 1 completed");
 * log("Step 2 completed");
 * groupEnd();
 */
export const groupCollapsed: typeof console.groupCollapsed =
  console.groupCollapsed.bind(console);
