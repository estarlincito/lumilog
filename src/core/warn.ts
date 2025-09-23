/**
 * Logs a warning message to the console with a ⚠️ prefix.
 *
 * @param {string} message - The main warning message to log.
 * @param {...any[]} optionalParams - Additional values to log alongside the main message.
 *
 * @example
 * warn("This is a warning");
 * warn("Warning with extra data:", { foo: "bar" });
 */
export const warn = (message: string, ...optionalParams: any[]) =>
  console.warn(`⚠️ ${message}`, ...optionalParams);
