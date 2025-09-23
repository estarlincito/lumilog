/**
 * Adds a timestamp to the browser's Performance or Node.js console timeline.
 *
 * @param {string} [label] - Optional label for the timestamp.
 *
 * @example
 * timeStamp("Start Process");
 * // ... some operations ...
 * timeStamp("End Process");
 */
export const timeStamp: typeof console.timeStamp =
  console.timeStamp.bind(console);
