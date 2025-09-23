/**
 * Stops a named JavaScript CPU profile started with `profile()`.
 *
 * @param {string} [label] - Optional name of the profile to end.
 *
 * @example
 * profile("MyProfile");
 * // ... run some code ...
 * profileEnd("MyProfile");
 */
export const profileEnd: typeof console.profileEnd =
  console.profileEnd.bind(console);
