/**
 * Displays an interactive listing of an object's properties.
 *
 * @param {any} obj - The object to display.
 * @param {object} [options] - Optional settings for displaying the object.
 *
 * @example
 * dir({ name: "Alice", age: 30 });
 * dir(process, { depth: 2 });
 */
export const dir: typeof console.dir = console.dir.bind(console);
