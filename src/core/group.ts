/**
 * Starts a new inline group in the console. Subsequent messages will be indented.
 *
 * @param {...any[]} label - Optional label(s) for the group.
 *
 * @example
 * group("User Info");
 * log("Name: Alice");
 * log("Age: 30");
 * groupEnd();
 */
export const group: typeof console.group = console.group.bind(console);
