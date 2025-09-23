/**
 * Starts a named JavaScript CPU profile.
 *
 * @param {string} [label] - Optional name for the profile.
 *
 * @example
 * profile("MyProfile");
 * // ... run some code ...
 * profileEnd("MyProfile");
 */
export const profile: typeof console.profile = console.profile.bind(console);
