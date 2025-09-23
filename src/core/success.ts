/**
 * Logs a success message to the console with a ✅ prefix.
 *
 * @param {string} message - The main success message to log.
 * @param {...any[]} optionalParams - Additional values to log alongside the main message.
 *
 * @example
 * success("Task completed successfully");
 * success("User created:", { id: 1, name: "Alice" });
 */
export const success = (message: string, ...optionalParams: any[]) =>
  console.log(`✅ ${message}`, ...optionalParams);
