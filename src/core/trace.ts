/**
 * Prints a stack trace to the console at the point where it's called.
 *
 * @param {...any[]} data - Optional additional values to display alongside the trace.
 *
 * @example
 * trace("Debug point reached");
 */
export const trace: typeof console.trace = console.trace.bind(console);
