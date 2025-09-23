/**
 * Logs the number of times this particular call to `count()` has been called with the same label.
 *
 * @param {string} [label='default'] - Optional label for counting. Defaults to 'default' if not provided.
 *
 * @example
 * count();           // default: 1
 * count("tasks");    // tasks: 1
 * count("tasks");    // tasks: 2
 */
export const count: typeof console.count = console.count.bind(console);
