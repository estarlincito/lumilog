/**
 * Displays tabular data as a table in the console.
 *
 * @param {any} tabularData - The data to display (array or object).
 * @param {string[]} [properties] - Optional list of properties to include.
 *
 * @example
 * table([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]);
 * table([{ name: "Alice", age: 30 }], ["name"]);
 */
export const table: typeof console.table = console.table.bind(console);
