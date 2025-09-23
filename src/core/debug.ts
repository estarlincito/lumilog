/**
 * Logs a debug message to the console.
 *
 * @param {...any[]} data - The data to log.
 *
 * @example
 * debug("Debug info:", { user: "Alice" });
 */
export const debug: typeof console.debug = console.debug.bind(console);
