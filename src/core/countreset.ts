/**
 * Resets the count for the given label.
 *
 * @param {string} [label='default'] - Optional label to reset. Defaults to 'default' if not provided.
 *
 * @example
 * countReset();           // Resets the default counter
 * countReset("tasks");    // Resets the "tasks" counter
 */
export const countReset: typeof console.countReset =
  console.countReset.bind(console);
