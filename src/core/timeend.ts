/**
 * Stops a timer that was previously started with `time()` and logs the elapsed time.
 *
 * @param {string} label - The name of the timer to stop.
 *
 * @example
 * time("processTime");
 * // ... some operations ...
 * timeEnd("processTime"); // Logs: processTime: 123ms
 */
export const timeEnd: typeof console.timeEnd = console.timeEnd.bind(console);
