/**
 * Writes an error message to the console if the assertion is false.
 *
 * @param {any} condition - The condition to test. If falsy, the assertion fails.
 * @param {...any[]} optionalParams - Optional messages or objects to display when the assertion fails.
 *
 * @example
 * assert(1 === 2, "Math is broken!");
 * assert(user !== null, "User must not be null", user);
 */
export const assert: typeof console.assert = console.assert.bind(console);
