/**
 * Logs an informational message to the console.
 *
 * @param {...any[]} data - The data to log.
 *
 * @example
 * info("Server started on port 3000");
 * info("User logged in:", { id: 1, name: "Alice" });
 */
export const info: typeof console.info = console.info.bind(console);
