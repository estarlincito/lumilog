/**
 * Logs a tip message to the console with a 💡 prefix.
 *
 * @param {string} message - The main tip message to log.
 * @param {...any[]} optionalParams - Additional values to log alongside the main message.
 *
 * @example
 * tip("Remember to commit your changes frequently");
 * tip("User info:", { id: 1, name: "Alice" });
 */
export const tip = (message: string, ...optionalParams: any[]) =>
  console.log(`💡 ${message}`, ...optionalParams);
