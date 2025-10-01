import { dir } from './dir.js';

export const pretty = (obj: unknown) => {
  if (typeof window !== 'undefined') {
    // Browser
    dir(obj);
  } else {
    // Node.js
    try {
      dir(obj, { colors: true, depth: null });
    } catch {
      dir(String(obj));
    }
  }
};
