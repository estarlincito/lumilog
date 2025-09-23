/**
 * Logs the current value of a timer that was previously started with `time()`.
 *
 * @param {string} label - The name of the timer to log.
 * @param {...any[]} data - Optional additional values to display alongside the timer.
 *
 * @example
 * time("processTime");
 * // ... some operations ...
 * timeLog("processTime"); // Logs: processTime: 50ms
 * timeLog("processTime", "step 1 completed");
 */
export const timeLog: typeof console.timeLog = console.timeLog.bind(console);
