/**
 * Logs an error message to the console with a ❌ prefix.
 *
 * @param {string} message - The main error message to log.
 * @param {...any[]} optionalParams - Additional values to log alongside the main message.
 *
 * @example
 * error("Something went wrong");
 * error("Error with details:", { code: 500 });
 */
export const error = (message: string, ...optionalParams: any[]) =>
  console.error(`❌ ${message}`, ...optionalParams);
