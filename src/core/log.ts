/**
 * Logs a message to the console.
 *
 * @param {...any[]} data - The data to log.
 *
 * @example
 * log("Hello world");
 * log("User info:", { id: 1, name: "Alice" });
 */
export const log: typeof console.log = console.log.bind(console);
