/**
 * Starts a timer with a given label. Used to measure the duration of operations.
 *
 * @param {string} label - The name of the timer.
 *
 * @example
 * time("processTime");
 * // ... some operations ...
 * timeEnd("processTime");
 */
export const time: typeof console.time = console.time.bind(console);
