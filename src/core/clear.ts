/**
 * Clears the console if the environment allows it.
 *
 * @example
 * clear();
 */
export const clear: typeof console.clear = console.clear.bind(console);
