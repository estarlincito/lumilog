/**
 * Displays an XML/HTML representation of an object (mainly for browsers).
 *
 * @param {any} obj - The object to display.
 *
 * @example
 * dirxml(document.body);
 * dirxml({ name: "Alice", age: 30 });
 */
export const dirxml: typeof console.dirxml = console.dirxml.bind(console);
