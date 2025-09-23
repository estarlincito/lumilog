/**
 * Ends the current inline group in the console.
 *
 * @example
 * group("User Info");
 * log("Name: Alice");
 * log("Age: 30");
 * groupEnd();
 */
export const groupEnd: typeof console.groupEnd = console.groupEnd.bind(console);
